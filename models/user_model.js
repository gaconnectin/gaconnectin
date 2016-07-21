const _db = require('../db/db');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSalt(10);

function getAllUsers(req,res,next) {
  db.any('SELECT * from users')
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
 db.one(`SELECT * 
          FROM invitations
          WHERE invitation_token=$1`,[req.body.invitation_token])
          .then(data => {
            res.has_valid_token = data.invitation_token ? true : false;
            next();
          })
          .catch( error => {
            console.log('Error ', error);
          })

}

function createUser(req, res, next) {
  if (res.has_valid_token) {
    createSecure( req.body.username, req.body.password, req.body.display_name, req.body.slack, saveUser)
    function saveUser(username, hash, display_name, slack) {
      db.any(`INSERT INTO users (username, passwordDigest, display_name, slack, date_created)
             VALUES($1,$2,$3,$4,now())`,[email, hash])
           .then(data => {
            console.log(data);
            next();
           })
           .catch( error => {
            console.log('Error ', error);
           })
    }
  } else {
    res.error = "No Valid Invitation Token given";
    next();
  }
} 

function updateUser(req,res,next) {
  let paramVals = [ req.body.username, req.body.display_name, req.body.slack ];
  let paramNames = ['username', 'display_name', 'slack'];
  let queryString = '';
  for (let i=0; i<paramVals.length; i++) {
    if (queryString) {
      queryString += ", ";
    }
    if (paramVals[i] !== '') {
      queryString += `${paramNames[i]}=$${i+1}`;
    }
  }
  console.log('queryString = ', queryString)
  db.any(`UPDATE users SET
          ${queryString}
          WHERE user_id=$4`,
          [req.body.first_name,req.body.last_name,req.body.age,req.params.id])
    .then( data => {
      console.log('Update successful!');
      next();
    })
    .catch( error => {
      console.log('Error ',error);
    });
}

function getUser(req,res,next) {
  db.one(`SELECT * 
          FROM users
          WHERE user_id=$1`,[req.params.id])
          .then(data => {
            res.rows = data;
            next();
          })
          .catch( error => {
            console.log('Error ', error);
          })

}

// function addUserAttribute(req,res,next) {
//   db.one(`with inserted as (
//             insert into attributes (attr_name, attr_type)
//             values($1, '$2) ON CONFLICT (attr_name, attr_type) 
//             DO UPDATE SET attr_name = EXCLUDED.attr_name returning *
//          )
//          insert into user2attribute(user_id,attribute_id) 
//          select , inserted.attribute_id from inserted;
//     SELECT * 
//           FROM users
//           WHERE user_id=$1`,[req.params.id])
//           .then(data => {
//             res.rows = data;
//             next();
//           })
//           .catch( error => {
//             console.log('Error ', error);
//           })

// }

module.exports = { getAllUsers, getUser, createUser, checkInvitationToken };
