const Sequelize = require('sequelize');
const db = require('../connection');

const User = db.define('user', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    defaultValue: 'TEST ADDRESS',
  },
  city: {
    type: Sequelize.STRING,
    defaultValue: 'TEST CITY',
  },
  state: {
    type: Sequelize.STRING,
    defaultValue: 'TEST STATE',
  },
  zipcode: {
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
    },
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default User;
