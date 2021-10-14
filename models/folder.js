require('dotenv').config()
const Sequelize = require('sequelize')
const DB = process.env.DB_URL
const sequelize = new Sequelize(DB)

module.exports = sequelize.define('folder', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primarykey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    field: 'title',
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    field: 'description',
    type: Sequelize.STRING,
  },
  user_id: {
    field: 'user_id',
    type: Sequelize.INTEGER,
    allowNull: false
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