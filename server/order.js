const Sequelize = require("sequelize");
const db = require("../index");

db.define("Order", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  orderTotal: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.0,
    validate: {
      isDecimal: true,
      min: 0
    }
  }
});
