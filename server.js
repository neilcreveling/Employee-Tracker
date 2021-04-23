const mysql = require('mysql');
const inquirer = require('inquirer');

const mainMenuQues = require('./db/questions/mainMenu');
const addEmployeeQues = require('./db/questions/addEmployee');
const addRoleQues = require('./db/questions/addRole');
const addDeptQues = require('./db/questions/addDept');
const updateEmployeeQues = require('./db/questions/updateEmployee');
const deleteEmployeeQues = require('./db/questions/deleteEmployee')

// password
const pass = require('./config')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: pass,
    database: 'employeetracker_db',
});

// initial prompt
const init = () => {
    inquirer.prompt(mainMenuQues).then((data) => {
            switch (data.action) {
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
    console.log('Creating employee...');
    inquirer.prompt(addEmployeeQues).then((data) => {
        employeeFirstName = data.firstAdd;
        employeeLastName = data.lastAdd;
        employeeRole = parseInt(data.roleAdd);
        employeeManager = parseInt(data.managerAdd);
        connection.query(
            'INSERT INTO employee SET ?',
            {
                first_name: employeeFirstName,
                last_name: employeeLastName,
                role_id: employeeRole,
                manager_id: employeeManager,
            },
            (err) => {
                if (err) throw err;
                console.log('Employee added successfuly.')
                console.table(res);
                init();
            }
        );
        init();
    });
};

// add roles
const addRole = () => {
    console.log('Creating role...');
    inquirer.prompt(addRoleQues).then((data) => {
        roleTitle = data.roleName;
        roleSalary = parseInt(data.roleSalary);
        roleDept = parseInt(data.deptId)
        connection.query(
            'INSERT INTO role SET ?',
            {
                title: roleTitle,
                salary: roleSalary,
                dept_id: roleDept
            },
            (err,res) => {
                if (err) throw err;
                console.log('Role added successfully.');
                console.table(res);
            }
        );
        init();
    });
};

// add departments
const addDepartment = () => {
    console.log('Creating department...');
    inquirer.prompt(addDeptQues).then((data) => {
        connection.query(
            'INSERT INTO department SET ?',
            {
                name: data.newDepartment,
            },
            (err, res) => {
                if (err) throw err;
                console.log('The department has been added.');
                console.table(res)
            }
        );
        init();
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
        'SELECT * FROM department',
        (err, res) => {
            if (err) throw err;
            console.table(res);
    });
    init();
};


// view roles
const viewRoles = () => {
    connection.query(
        'SELECT * FROM role LEFT JOIN department on role.department_id = department.id',
        (err, res) => {
            if (err) throw err;
            console.table(res);
    });
    init();
};


// update employee roles
const updateEmployeeRole = () => {
    inquirer.prompt(updateEmployeeQues).then((data) => {
        const employeeId = parseInt(data.employeeId);
        const employeeRoleId = parseInt(data.roleId);
        console.log('Checking system...');
        connection.query(
            'UPDATE employee SET ? WHERE ?',
            [
                {
                    role_id: employeeRoleId,
                },
                {
                    id: employeeId,
                }
            ],
            (err, res) => {
                if (err) throw err;
                console.log('Employee role has been updated.');
                console.table(res);
            }
        );
        init();
    });
};

const deleteEmployee = () => {
    inquirer.prompt(deleteEmployeeQues).then((data) => {
        console.log('Deleting employee...')
        connection.query(
            'DELETE employee WHERE ?',
            {
                id: data.employeeDelete,
            },
            (err, res) => {
                if (err) throw err;
                console.log('Employee deleted successfully.');
                console.table(res);
            }
        );
        init;
    });
};

init();