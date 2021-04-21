INSERT INTO department (name)
VALUES 
('Sales'),
('Engineering'),
('Finance');

INSERT INTO role (title, salary, dept_id)
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