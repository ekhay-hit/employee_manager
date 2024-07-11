// require Sequelize
const Sequelize = require("sequelize");
// require dotenv for data base credintials 
require('dotenv').config();

// initialize connect configuration
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;