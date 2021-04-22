const mysql = require('mysql');
const inquirer = require('inquirer');

const mainMenuQues = require('./db/questions/mainMenu');
const addEmployeeQues = require('./db/questions/addEmployee');
const addRoleQues = require('./db/questions/addRole');
const addDeptQues = require('./db/questions/addDept');
const updateEmployeeQues = require('./db/questions/updateEmployee');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeetracker_db',
});

connect.connect((err) => {
    if (err) throw err;
    init()
});


// initial prompt
const init = () => {
    inquirer.prompt(mainMenuQues).then((answer) => {
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
    inquirer.prompt(addEmployeeQues).then((answer) => {
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
    inquirer.prompt(addRoleQues).then((answer) => {
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
        .prompt(addDeptQues).then((answer) => {
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
    connection.query(
        'SELECT employee.id, first_name, last_name, title, salary, manager_id FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id',
        (err, res) => {
            if (err) throw err;
            console.table(res);
        }
    );
    init();
};


// view departments
const viewDepartments = () => {
    connection.query(
        'SELECT * FROM department'),
        (err, res) => {
            if (err) throw err;
            console.table(res);
    };
    init();
};


// view roles
const viewRoles = () => {
    connection.query(
        'SELECT * FROM role LEFT JOIN department on role.department_id = department.id'),
        (err, res) => {
            if (err) throw err;
            console.table(res);
    };
    init();
};


// update employee roles
const updateEmployeeRole = () => {
    inquirer
        .prompt(updateEmployeeQues).then((answer) => {
            
        })
    };
    console.log('Updating employee role');
    const query = connection.query(
        'UPDATE employee SET ? WHERE ?',

    )
}