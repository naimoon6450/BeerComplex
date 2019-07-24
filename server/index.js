const express = require('express');
const path = require('path');
const db = require('./db/connection');
const PORT = process.env.HOST_PORT || 8080;
const app = express();
const { seed } = require('../seed');
const morgan = require('morgan');

// for customizing env variables, .env needs to stay in root directory
require('dotenv').config();

// static middleware, body parsing middleware, logging middleware
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(morgan('dev'));

// 'API' routes
// app.use('/api', require('./api'));

// send index.html
app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// db sync, seed, and app start
db.sync({ force: true })
  .then(() => {
    // seed();
    app.listen(PORT, () => {
      console.log(`Server listening on PORT: ${PORT}`);
    });
  })
  .catch(e => console.error(e));

module.exports = app;
