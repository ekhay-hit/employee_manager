const inquirer = require('inquirer');
const sql = require("./utils/sql.js")
// requiring database config
// const sequelize = require("./config/connection.js")
const {Pool}= require('pg');
const viewAllDepartments = require('./utils/sql.js');
const pool = new Pool({user:'postgres',password:'ad12', host:'localhost', database:'employee_db'}, console.log('Connected to the employee_db database'));



async function init (){
   
    console.log(`
        `);
 await inquirer.prompt(
    {
        type: 'list',
        message:"Choose an option",
        name: 'request',
        choices:[
            'View all departments',
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
        ]
    })
    .then ((data)=>{
      
        const selection = data.request;
        console.log(data.request);
        
    switch(selection){
        case "View all departments":
            console.log('I am here');
            sql.viewAllDepartments();
           
        break; 
        case "View all roles":
                sql.viewAllRoles()
              
        break; 
        case "View all employees":
                sql.viewAllEmployees()
           
        break; 
        
        case  "Add a department":
            sql.addDepartment()
        break;

        case  "Add a role":
            sql.addRole();   
        break; 

        case  "Add an employee":
            sql.addNewEmoployee();           
        break;
        default:
            console.log('could not find the choice');      
    }
})
  
}

pool.connect(()=>{
    init();
})

module.exports.init = init;