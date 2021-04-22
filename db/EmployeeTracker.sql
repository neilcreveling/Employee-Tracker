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

CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);



CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES 
('Sales'),
('Engineering'),
('Finance');

INSERT INTO role (title, salary, department_id)
VALUES 
('Salesperson', 50000.00, 1),
('Software Engineer', 75000.00, 2),
('Accountant', 45000.00, 3),
('Sales Lead', 100000.00, 1),
('Lead Engineer', 125000.00, 2),
('Account Manager', 100000.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Smith', 4, null),
('Jane', 'Doe', 5, null),
('Paul', 'Bianco', 6, null),
('Nina', 'Rice', 1, 1),
('Thomas', 'Jones', 2, 2),
('Michelle', 'Yang', 3, 3);

SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;