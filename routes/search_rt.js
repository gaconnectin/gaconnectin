const searchRouter = require('express').Router();

searchRouter.route('/')
  .get((req, res)=>{
     res.send('you hit the Search Route')
  })

module.exports = searchRouter;
