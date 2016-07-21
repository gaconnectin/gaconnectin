'use strict';

const pg = require('pg-promise')({
// Initialization Options
});

const config = {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS
};


const _db = pg(config);

module.exports = {


  // GET all users and their interests and skills
  getUserTypes(req, res, next) {
    _db.any(`SELECT users.display_name, attributes.attr_name, attributes.attr_type FROM users INNER JOIN user2attribute as u2a on users.user_id = u2a.user_id INNER JOIN attributes on u2a.attribute_id = attributes.attribute_id; ` )
        .then( types=>{
          res.rows = types ;
          console.log("Succes at getting user skills or interests!");
          next()
        })
        .catch( error=> {
          console.log('You have a getUserTypes error!! ', error);
          throw error;
        })
  }


}