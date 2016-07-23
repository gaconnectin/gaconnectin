const _db = require('../db/db');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSalt(10);

function getAllUsers(req,res,next) {
  _db.any('SELECT * from users')
  .then( data => {
    res.rows = data;
    next();
  })
  .catch( error => {
    console.log('Error ', error);
  });

}

function createSecure(username, password, display_name, slack, callback) {
  bcrypt.genSalt(function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      callback(username, hash, display_name, slack);
    })
  })
}


function checkInvitationToken(req, res, next) {
  console.log('In checkInvitationToken. req.body =', req.body)
 _db.any(`SELECT *
          FROM invitations
          WHERE invitation_token=$1`,[req.body.invitation_token])
          .then(data => {
            console.log("data = ", data);
            res.has_valid_token = (data && data[0] && data[0].invitation_token) ? true : false;
            next();
          })
          .catch( error => {
            console.log('Error ', error);
          })

}

function createUser(req, res, next) {
  console.log("In create user. has valid token = ", res.has_valid_token)
  if (res.has_valid_token) {
    createSecure( req.body.username, req.body.password, req.body.display_name, req.body.slack, saveUser)
    function saveUser(username, hash, display_name, slack) {

      _db.any(`INSERT INTO users (username, password_digest, display_name, slack)
             VALUES($1,$2,$3,$4)`,[username, hash, display_name, slack])
           .then(data => {
            console.log(data);
            next();
           })
           .catch( error => {
            console.log('Error ', error);
            next();
           })
    }
  } else {
    res.error = "No Valid Invitation Token given";
    next();
  }
}


function updateUser(req,res,next) {
  items = [
    { name: 'username', val: req.body.username },
    { name: 'display_name', val: req.body.display_name },
    { name: 'slack', val: req.body.slack },
  ];

  let queryString = '';
  let vals = [];
  let currI = 0;
  let currVal;

  for (let i=0; i<items.length; i++) {
    currVal = items[i].val;
    console.log('currVal = ', currVal);
    if (currVal !== undefined && currVal !== '') {
      if (queryString) {
        queryString += ", ";
      }
      currI += 1;
      queryString += `${items[i].name}=$${currI}`;
      vals.push(items[i].val);
    }
  }

  currI += 1;
  vals.push(req.params.uID)
  console.log('queryString = ', queryString);
  console.log('vals = ', vals);
  _db.any(`UPDATE users SET
        ${queryString}
        WHERE user_id=$${currI};`,
        vals)
  .then( data => {
    console.log('Update successful!');
    next();
  })
  .catch( error => {
    console.log('Error ',error);
  });

}

function getUserAttributes(req,res,next) {
  console.log('In getUserAttributes for user ', req.params.uID);
  _db.any(`select attributes.attr_name, attributes.attr_type
FROM users NATURAL INNER JOIN user2attribute NATURAL INNER JOIN attributes
where users.user_id=$1`,[req.params.uID])
          .then(data => {
            console.log('data = ', data);
            res.attributes = data;
            next();
          })
          .catch( error => {
            console.log('Error ', error);
          })


}

function getUser(req,res,next) {
  _db.one(`SELECT *
          FROM users
          WHERE user_id=$1`,[req.params.uID])
          .then(data => {
            res.user = data;
            next();
          })
          .catch( error => {
            console.log('Error ', error);
          })

}

function deleteUser(req,res,next) {
  _db.any(`DELETE FROM users
          WHERE user_id = $1`, [req.params.uID])
       .then(data => {
        console.log(data);
        next();
       })
        .catch( error => {
        console.log('Error ', error);
      });
}


function addUserAttribute(req,res,next) {
  console.log(`attr_name = ${req.body.attr_name}, attr_type = ${req.body.attr_type}`);
  _db.any(`with inserted as (
            insert into attributes (attr_name, attr_type)
            values($1, $2) ON CONFLICT (attr_name, attr_type)
            DO UPDATE SET attr_name = EXCLUDED.attr_name returning *
         )
         insert into user2attribute(user_id,attribute_id)
         select $3, inserted.attribute_id from inserted;`,[req.body.attr_name, req.body.attr_type, req.params.uID])
          .then(data => {
            res.rows = data;
            next();
          })
          .catch( error => {
            console.log('Error ', error);
          })

}

function findUserAttributeId(req,res,next) {
  if (req.body.attribute_id) {
    next();
  } else {
    _db.any(`SELECT attribute_id from attributes
             WHERE attr_name=$1 and attr_type=$2`, [req.body.attr_name, req.body.attr_type])
    .then(data => {
      console.log(data);
      let id = (data && data[0] && data[0].attribute_id) ? data[0].attribute_id : null;
      console.log('attribute_id = ', id)
      if (id) {
        req.body.attribute_id = id;
      }
      next();
    })
  }
}

function deleteUserAttribute(req,res,next) {
  if (!req.body.attribute_id) {
    console.log("No attribute_id to delete!")
  } else {
    _db.any(`DELETE FROM user2attribute
            WHERE attribute_id = $1 and user_id = $2`, [req.body.attribute_id, req.params.uID])
         .then(data => {
          console.log(data);
          next();
         })
          .catch( error => {
          console.log('Error ', error);
        });
  }
}
module.exports = { getUserAttributes, getAllUsers, getUser, createUser, checkInvitationToken,
                   updateUser, deleteUser, addUserAttribute, findUserAttributeId,
                   deleteUserAttribute};
