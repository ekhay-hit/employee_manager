DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db;

CREATE TABLE departments (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL  
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    manager_id INTEGER,

    role_id INTEGER
    FOREIGN KEY (role_id)
    REFERENCES role(id)
);