const Sequelize = require('sequelize');
const db = require('../connection');

const Cart = db.define('Cart', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
});

module.export = { Cart };
