const mysql = require('mysql');
const inquirer = require('inquirer');
const { resourceLimits } = require('node:worker_threads');

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

const addEmployee = () => {
    inquirer
        .prompt([
        {
            name: 'first-name-add',
            type: 'input',
            messsge: 'Please enter first name of new employee.',
        },
        {
            name: 'last-name-add',
            type: 'input',
            message: 'Please enter last name of new employee.',
        },
        {
            name: 'role-add',
            type: 'rawList',
            choices() {
                const roleChoiceArray = [];
                results.forEach(({ role }) => {
                    roleChoiceArray.push(role);
                });
                return roleChoiceArray;
            },
            message: 'Please choose the role for the new employee.',
        },
        {
            name: 'manager-add',
            type: 'rawList',
            choices() {
                const managerChoiceArray = [];
                results.forEach(({ manager }) => {
                    managerChoiceArray.push(manager);
                });
                return managerChoiceArray;
            },
            message: 'Please choose the manager for the new employee.',
        },
    ])
    .then((answer) => {
        connection.query(
            'INSERT INTO employee SET ?',
            {
                first_name: answer.first-name-add,
                last_name: answer.last-name-add,
                role_id: answer.role-add,
                manager_id: answer.manager-add
            },
            (err) => {
                if (err) throw err;
                console.log('Employee added successfuly.')
                init();
            }
        )

    }
}



// create roles


// create employees


// view departments


// view roles


// view employees


// update employee roles