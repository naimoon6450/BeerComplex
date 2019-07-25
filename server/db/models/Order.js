const Sequelize = require('sequelize');
const db = require('../connection');

const pending = 'PENDING';
const complete = 'COMPLETE';
const Order = db.define('Order', {
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
    },
  },
  status: {
    type: Sequelize.ENUM(pending, complete),
    defaultValue: pending,
  },
});

module.exports = Order;
