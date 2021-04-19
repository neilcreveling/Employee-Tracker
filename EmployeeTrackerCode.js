const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeetracker_db',
});

connect.connect((err) => {
    if (err) throw err;
    init()
});



// create departments
const createDepartment = () => {
    console.log('Creating a new department.');
    const query = connection.query(
        ''
    )
}

// initial prompt
const init = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawList',
            message: 'What would you like to do?',
            choices: [
                'Add Employee',
                'Add Department',
                'Add Role',
                'View Employees',
                'View Departments',
                'View Roles',
                'Update Employee Role',
                'Delete Employee',
                'Delete Department',
                'Delete Role',
            ], 
        })
        .then((answer) => {
            switch (answer.action) {
                case 'Add Employee':
                   addEmployee();
                    break;
                
                case 'Add Department':
                    addDepartment();
                    break;

                case 'Add Role':
                    addRole();
                    break;

                case 'View Employees':
                    viewEmployees();
                    break;

                case 'View Departments':
                    viewDepartments();
                    break;

                case 'View Roles':
                    viewRoles();
                    break;

                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;

                case 'Delete Employee':
                    deleteEmployee();
                    break;

                case 'Delete Department':
                    deleteDepartment();
                    break;

                case 'Delete Role':
                    deleteRole();
                    break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
            }
        });
}


// create roles


// create employees


// view departments


// view roles


// view employees


// update employee roles