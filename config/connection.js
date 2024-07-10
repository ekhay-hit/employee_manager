const Sequelize = require("sequelize");

// initialize connect configuration
const sequelize = new Sequelize("employee_db","postgress", "ad12",{
    host: 'localhost',
    dialect: 'postgress',
});

module.exports = sequelize;