const searchRouter = require('express').Router();
const db           = require('../models/search_model');


/* convenience method for sending */
const sendJSONresp = (req,res)=>res.json(res.rows)



searchRouter.route('/')
      .get(db.getUserTypes, sendJSONresp);

searchRouter.route('/skills')
      .get(db.getSkills, sendJSONresp);

searchRouter.route('/interests')
      .get(db.getInterest, (req,res)=>res.json(res.rows));

searchRouter.route('/users-attributes')
      .get(db.getUsersAttributes, (req,res)=> {
        console.log(res.rows, "search Router get user attributes");
        res.json(res.rows);
    });
// searchRouter.route('/users-interests')
//       .get(db.getUsersInterest, (req,res)=>res.json(res.rows));



module.exports = searchRouter;
