const userRouter = require('express').Router();
const { getAllUsers, getUser, createUser, checkInvitationToken } = require('../models/user_model');


userRouter.route('/')
  .get( checkInvitationToken, (req, res)=>{
     res.send('you hit the User Route')
  })
  .post((req, res)=> {

  })

module.exports = userRouter;
