const userRouter = require('express').Router();
const { getAllUsers, getUser, createUser, checkInvitationToken, updateUser } = require('../models/user_model');

/* convenience method for sending */
const sendJSONresp = (req,res)=>res.json(res.rows)

userRouter.route('/')
  .get(getAllUsers, (req, res)=>{
     res.send('you hit the User Route')
  })
  .post(checkInvitationToken, createUser, (req, res)=> {
    if (res.error) {
//      res.send("Got error: ", res.error);
      res.status(400).send(res.error);
    } else {
      res.status(200).send('created user');
    }

  })
  .put(updateUser, sendJSONresp)


module.exports = userRouter;
