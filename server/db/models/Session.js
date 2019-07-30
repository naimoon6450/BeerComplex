const Sequelize = require('sequelize');
const db = require('../connection');

const Session = db.define('session', {
  sid: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  expires: {
    type: Sequelize.DATE,
  },
});

module.exports = Session;
