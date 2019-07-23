const Sequelize = require('sequelize');
const db = require('../connection');

const User = db.define('User', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  address: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
    defaultValue: 'TEST CITY',
  },
  state: {
    type: Sequelize.STRING,
    defaultValue: 'TEST STATE',
  },
  zipCode: {
    type: Sequelize.STRING,
    defaultValue: 'TEST ZIP CODE',
  },
  country: {
    type: Sequelize.STRING,
    defaultValue: 'TEST COUNTRY',
  },
  phone: {
    type: Sequelize.STRING,
    defaultValue: 'TEST PHONE',
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = User;
