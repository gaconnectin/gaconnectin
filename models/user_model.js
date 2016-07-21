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
  _db.any(`UPDATE users SET
          ${queryString}
          WHERE user_id=$4`,
          [req.body.username,req.body.display_name,req.body.slack,req.params.id])
    .then( data => {
      console.log('Update successful!');
      next();
    })
    .catch( error => {
      console.log('Error ',error);
    });
}

function getUser(req,res,next) {
  _db.one(`SELECT * 
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

module.exports = { getAllUsers, getUser, createUser, checkInvitationToken, updateUser };
