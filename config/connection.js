const Sequelize = require("sequelize");

// initialize connect configuration
const sequelize = new Sequelize("employee_db","postgres", "ad12",{
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;