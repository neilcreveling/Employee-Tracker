DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE employee (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);

USE employeetracker_db;

CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

USE employeetracker_db;

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ('Sales');

INSERT INTO department (name)
VALUES ('Engineering');

INSERT INTO department (name)
VALUES ('Finance');

INSERT INTO role (title, salary, dept_id)
VALUES ('Salesperson', 50000, 1);

INSERT INTO role (title, salary, dept_id)
VALUES ('Software Engineer', 75000, 2);

INSERT INTO role (title, salary, dept_id)
VALUES ('Accountant', 45000, 3);

INSERT INTO role (title, salary, dept_id)
VALUES ('Sales Lead', 100000, 1);

INSERT INTO role (title, salary, dept_id)
VALUES ('Lead Engineer', 125000, 2);

INSERT INTO role (title, salary, dept_id)
VALUES ('Account Manager', 100000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('John', 'Smith', 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Jane', 'Doe', 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Paul', 'Bianco', 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Nina', 'Rice', 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Thomas', 'Jones', 2, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Michelle', 'Yang', 3, 3);



SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;