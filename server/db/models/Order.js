const Sequelize = require('sequelize');
const db = require('../connection');

const pending = 'PENDING';
const complete = 'COMPLETE';
const Order = db.define('order', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  orderTotal: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      isInt: true,
    },
  },
  status: {
    type: Sequelize.ENUM(pending, complete),
    defaultValue: pending,
  },
});

module.exports = Order;
