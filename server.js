'use strict'

const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = (DEV) ? require('dotenv').config() : undefined;

const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser');
const userRoute   = require('./routes/user_rt');
const searchRoute = require('./routes/search_rt');
const app         = express();
const PORT        = process.env.PORT || 3000;


app.use(require('compression')())

app.use( logger( DEV ? 'dev' : 'common') );

app.use(bodyParser.json());

//ROUTES


app.use('/search', searchRoute);

app.use('/user', userRoute);

app.use( express.static(path.join(__dirname, 'dist')));


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})


app.listen(PORT , () => console.log(`server magic on`, PORT ) );



