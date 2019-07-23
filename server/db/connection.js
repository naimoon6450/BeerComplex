const Sequelize = require('sequelize');
const db = Sequelize(
  `postgres://${process.env.DB_HOST}:${process.env.PORT}/${
    process.env.DB_NAME
  }`,
  { logging: false }
);

export default db;
