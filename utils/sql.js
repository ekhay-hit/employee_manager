const {Pool} = require('pg');

const inquirer = require('inquirer');

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
    pool.query('SELECT * FROM employees',function(err, {rows}){
      console.table(rows);
    });
  }


 // add a new department 
 async function  addDepartment(){
 await inquirer.prompt(
        {
            type:'input',
            message:'Department name',
            name: 'department_name'
        }
    ).then((data)=>{
        const newDepartment = data.department_name;
        console.log(newDepartment);
      pool.query(`INSERT INTO departments(department_name) VALUES(?)`,[newDepartment], (error, department) =>{
        console.log('I am here to add a department');
          if(error) throw error
          console.table(department);

    });
})
}

module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment
}
    