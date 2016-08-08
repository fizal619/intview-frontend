'use strict'
const express = require('express');
const logger  = require('morgan');
const path    = require('path');

const app     = express();
const PORT    = process.argv[2] || process.env.port || 4000;

app.use( logger('dev') );

app.use( express.static(path.join(__dirname, 'dist')));

app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT , () => console.log('server here! listening on', PORT ) );
