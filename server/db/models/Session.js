const Sequelize = require('sequelize');
const db = require('../connection');

const Session = db.define('session', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  sessionId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Session;
