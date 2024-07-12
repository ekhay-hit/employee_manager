// requiring files and packages
const inquirer = require('inquirer');
const sql = require("./utils/sql.js")
const {Pool}= require('pg');
const viewAllDepartments = require('./utils/sql.js');

// creating pool to connect to database and passing credintials 
const pool = new Pool({user:'postgres',password:'ad12', host:'localhost', database:'employee_db'}, console.log('Connected to the employee_db database'));


// init function for getting data from user and logic to run quiries function base on the user input
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
      
        // assing switch conditon varaible 
        const selection = data.request;
        // printing users request
        console.log(data.request);

     // switch use to run quiries base on the user input    
    switch(selection){
        case "View all departments":
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

// ecporting functions
module.exports.init = init;
module.exports.pool = pool;