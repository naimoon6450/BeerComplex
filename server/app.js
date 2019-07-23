const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

// require env variables
require('dotenv').config();

// middleware
app.use(morgan('dev'));
app.use(express.json());

//static serving
app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
