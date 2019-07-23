const Sequelize = require('sequelize');
const db = require('../connection');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    //for test data// defaultValue: 'Testfirstname',
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    //for test data//defaultValue: 'Testlastname',
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    //for test data//defaultValue: '0 Test St.',
  },
  secondAddress: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: false,
    },
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true,
    },
    //for test data//defaultValue: 'Test City, Test State',
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
      not: ['[a-z]', 'i'],
      len: [5, 9],
    },
    //for test data//defaultValue: '00000',
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true,
    },
    //for test data//defaultValue: 'United States of America',
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
      not: ['[a-z]', 'i'],
      len: [7, 11],
    },
    //for test data//defaultValue: '555-5555',
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
    //for test data// defaultValue: 'test@gmail.com',
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    //for test data//defaultValue: 'testPassword',
  },
});

export default User;
