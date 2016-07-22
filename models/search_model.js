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


    // GET all skills from users

  getSkills(req, res, next) {
    _db.any(`SELECT attr_name FROM attributes WHERE attr_type= 'skills' ;`)
        .then( skills=> {
          res.rows = skills ;
          console.log(`Success at getting user skills !`);
          next()
        })
        .catch(error =>{
          console.log("You have an error getting user skills", error);
          throw error;
        })
  },
     // Get all interests from users
  getInterest(req,res,next) {
    _db.any(`SELECT attr_name FROM attributes WHERE attr_type= 'interest' ;`)
        .then( interest=> {
          res.rows = interest ;
          console.log("Success at getting user interests ! ");
          next()
        })
        .catch(error=> {
          console.log("You hve an error at getting user interests! ", error);
          throw error;
        })
  },

    // ALL users their names, attribute name and display name with their SKILLS
  getUsersSkills(req, res, next) {
    _db.any(`SELECT users.display_name, attributes.attr_name, attributes.attr_type FROM users INNER JOIN user2attribute as u2a on users.user_id = u2a.user_id INNER JOIN attributes on u2a.attribute_id = attributes.attribute_id WHERE attributes.attr_type in('skills');`)
        .then( skills=> {
          res.rows = skills ;
          console.log(`Success at getting user skills !`);
          next()
        })
        .catch(error =>{
          console.log("You have an error getting user skills", error);
          throw error;
        })
  },


  // ALL users their names, attribute name and display name with their INTERESTS
  getUsersInterest(req,res,next) {
    _db.any(`SELECT users.display_name, attributes.attr_name, attributes.attr_type FROM users INNER JOIN user2attribute as u2a on users.user_id = u2a.user_id INNER JOIN attributes on u2a.attribute_id = attributes.attribute_id WHERE attributes.attr_type in('skills');`)
        .then( interest=> {
          res.rows = interest ;
          console.log("Success at getting user interests ! ");
          next()
        })
        .catch(error=> {
          console.log("You hve an error at getting user interests! ", error);
          throw error;
        })
  },

  // GET all users and their interests and skills
  getUserTypes(req, res, next) {
    _db.any(`SELECT users.display_name, attributes.attr_name, attributes.attr_type FROM users INNER JOIN user2attribute as u2a on users.user_id = u2a.user_id INNER JOIN attributes on u2a.attribute_id = attributes.attribute_id; ` )
        .then( types=>{
          res.rows = types ;
          console.log("Success at getting user skills or interests!");
          next()
        })
        .catch( error=> {
          console.log('You have a getUserTypes error!! ', error);
          throw error;
        })
  }


}
