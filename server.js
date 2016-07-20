'use strict'

  const express   = require('express');
  const logger    = require('morgan');
  const path      = require('path');
  const userRoute = require('./routes/user_rt');
const searchRoute = require('./routes/search_rt');
const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;

app.use( logger('dev') );

app.use( express.static(path.join(__dirname, 'dist')));

//ROUTES

app.use('/search', searchRoute);

app.use('/user', userRoute);

app.get('/', (req, res)=>{
  res.send("Hello you're home")
});



app.listen(PORT , () => console.log(`server here! listening on`, PORT ) );
