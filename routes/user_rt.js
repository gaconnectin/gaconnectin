const userRouter = require('express').Router();

userRouter.route('/')
  .get((req, res)=>{
     res.send('you hit the User Route')
  })

module.exports = userRouter;
