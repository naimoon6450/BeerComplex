const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
  `postgres://${process.env.DB_HOST}:${process.env.DB_PORT}/${
    process.env.DB_NAME
  }`,
  { logging: false }
);

module.exports = db;
