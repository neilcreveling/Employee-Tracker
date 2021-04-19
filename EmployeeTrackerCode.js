const mysql = require('mysql');
const inquirer = require('inquirer');
const { connect } = require('node:http2');
const { inherits } = require('node:util');

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


// create roles


// create employees


// view departments


// view roles


// view employees


// update employee roles