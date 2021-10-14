require('dotenv').config()
const Sequelize = require('sequelize')
const DB = process.env.DB_URL
const sequelize = new Sequelize(DB)

module.exports = sequelize.define('user', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primarykey: true,
    allowNull: false,
    autoIncrement: true,
  },
  email: {
    field: 'email',
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    field: 'password',
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    field: 'createdAt',
    type: Sequelize.DATE,
  },
  deletedAt: {
    field: 'deletedAt',
    type: Sequelize.DATE
  },
}, { timestamps: false })