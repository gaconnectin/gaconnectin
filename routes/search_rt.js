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


searchRouter.route('skills/:id')
      .put(db.getASkill, sendJSONresp);

searchRouter.route('skills/:u2aID')
      .put(db.getASkill, sendJSONresp);


module.exports = searchRouter;
