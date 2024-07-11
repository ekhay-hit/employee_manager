const {Pool} = require('pg');
const serverjs =require('../server.js')
const pool = new Pool({user:'postgres',password:'ad12', host:'localhost', database:'employee_db'}, console.log('Connected to the employee_db database'));
pool.connect();

function viewAllDepartments(){
  pool.query('SELECT * FROM departments',function(err, {rows}){
    console.table(rows);
    
  });
}

function viewAllRoles(){
    pool.query('SELECT * FROM roles',function(err, {rows}){
      console.table(rows);
      
    });
  }

  function viewAllEmployees(){
    pool.query('SELECT * FROM employee',function(err, {rows}){
      console.table(rows);
      
    });
  }

module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees
}
    