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
    // Getting a user skill
  getASkill(req,res,next) {
    _db.one(`SELECT users.display_name, attributes.attr_name, attributes.attr_type FROM users INNER JOIN user2attribute as u2a on users.user_id = u2a.user_id INNER JOIN attributes on u2a.attribute_id = attributes.attribute_id WHERE attributes.attr_type in('skills');`)
        .then( aSkill=> {
          res.rows = aSkill ;
          console.log(`Success at getting a users skill !`);
          next()
        })
        .catch(error =>{
          console.log("You have an error at getting a users skill", error);
          throw error;
        })
  },
    // Gettng a users interest
  getAnInterest(req,res,next) {
    // _db.one(`SELECT users.display_name, attributes.attr_name, attributes.attr_type FROM users INNER JOIN user2attribute as u2a on users.user_id = u2a.user_id INNER JOIN attributes on u2a.attribute_id = attributes.attribute_id WHERE attributes.attr_type in('skills');`)

     // tID is invented here
    req.body.u2aID = Number.parseInt(req.params.u2aID);

    // req.body.completed = !!req.body.completed;

    _db.one(
      `UPDATE users, attributes SET
      users.display_name = $/display_name/,
      attributes.attr_name = $/attr_name/,
      WHERE u2a.user_id = $/u2aID/
      returning *;  `,
      req.body)

        .then(anInterest=> {
          res.rows = anInterest;
          console.log(`Success at getting a users interest !`);
          next()
        })
        .catch(error=>{
          console.log("You have an error at getting a users interest! ", error);
          throw error;
        })
  },


  getInterest(req,res,next) {
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
