const searchRouter = require('express').Router();
const db           = require('../models/search_model');


/* convenience method for sending */
const sendJSONresp = (req,res)=>res.json(res.rows)



searchRouter.route('/')
      .get(db.getUserTypes, sendJSONresp)
// searchRouter.route('/')
//       .get(db.getUserTypes, (req, res)=>{
//         res.json(res.rows)
//       })


module.exports = searchRouter;
