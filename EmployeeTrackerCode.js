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

// add employee
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
        let query = 
            'SELECT employee.first-name-add, employee.last-name-add, employee.role_id, employee.manager_id, role.title, role.id';
        query +=
            'FROM employee INNER JOIN role ON role.id = employee.role_id';
            (err) => {
                if (err) throw err;
                console.log('Employee added successfuly.')
                init();
            }
    })

    
}


// add roles
const addRole = () => {
    inquirer
        .prompt([
            {
                name: 'role-name',
                type: 'input',
                message: 'Please enter new role name.',
            },
            {
                name: 'role-salary',
                type: 'input',
                message: 'Please enter new role salary.',
            },
            {
                name: 'dept',
                type: 'rawList',
                choices() {
                    const deptArray = [];
                    results.forEach(({ name }) => {
                        deptArray.push(name);
                    });
                    return deptArray;
                },
                message: 'Please choose department for new role.'
            },
        ])
        .then((answer) => {
            connection.query(
                'INSERT INTO role SET ?',
                {
                    title: answer.role-name,
                    salary: answer.role-salary,
                    dept_id: 'SELECT role.id FROM role INNER JOIN department ON role.dept_id'
                }
            )

        })
}

// add departments
const addDepartment = () => {
    inquirer
        .prompt(
        {
            name: 'new-department',
            type: 'input',
            message: 'Please enter the new department name.'
        },
        )
        .then((answer) => {
            connection.query(
                'INSERT INTO department SET ?',
                {
                    name: answer.new-department,
                },
                (err) => {
                    if (err) throw err;
                    console.log('The department has been added.');
                    init();
                }
            );
        });
};

// view employees
const viewEmployees = () => {
    connection.query('SELECT * FROM employee'), (err, results) => {
        if (err) throw err;
    };
};


// view departments
const viewDepartments = () => {
    connection.query('SELECT * FROM department'), (err, results) => {
        if (err) throw err;
    };
};


// view roles
const viewRoles = () => {
    connection.query('SELECT * FROM role'), (err, results) => {
        if (err) throw err;
    };
};


// update employee roles
const updateEmployeeRole = () => {
    inquirer
        .prompt([
        {
            name: 'update-employee',
            type: 'rawList',
            choices() {
                const updateEmployeeArray = [];
                results.forEach(({ first_name, last_name }) => {
                    updateEmployeeArray.push(first_name, last_name)
                });
            return updateEmployeeArray;
            },
            message: 'Which employee would you like to update?',
        },
        {
            name: 'update-role',
            type: 'rawList',
            choices() {
                const updateRoleArray = [];
                results.forEach(({ title }) => {
                    updateRoleArray.push(title)
                });
            return updateRoleArray;
            },
            message: 'Please assign the employee a new role.'
        }
        ])
        .then((answer) => {
            
        })
    };
    console.log('Updating employee role');
    const query = connection.query(
        'UPDATE employee SET ? WHERE ?',

    )
}