const inquirer = require('inquirer');


inquirer.prompt(
    {
        type: 'list',
        message:"Choose an option",
        name: 'request',
        choices:[
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
        ]
    })
    .then((req)=>{
    console.log(req);

    switch(req){
        case 'View all departments':
        break; 
        case 'View all roles':
        break; 
        case 'View all employees':
        break; 
        case  'Add a department':
        break; 
        case  'Add a role':
        break; 
        case  'Add an employee':
        break; 
        case 'Update an employee role':
        break; 
    }
})
