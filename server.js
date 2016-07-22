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
const PORT        = process.argv[2] || process.env.port || 3000;


app.use( logger('dev') );

app.use( express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

//ROUTES
app.get('*', (req, res)=>
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
    )

app.use('/search', searchRoute);

app.use('/user', userRoute);




app.listen(PORT , () => console.log(`server magic on`, PORT ) );
