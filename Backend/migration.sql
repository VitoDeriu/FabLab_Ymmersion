DROP DATABASE IF EXISTS fablab;

CREATE DATABASE IF NOT EXISTS fablab;

CREATE USER IF NOT EXISTS 'fablab' IDENTIFIED BY 'password';

GRANT ALL ON fablab.* TO 'fablab';

USE fablab; 


CREATE TABLE IF NOT EXISTS classes(
    id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS printer_status(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS project_status(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    pseudo VARCHAR(25) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    is_admin BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL ,
    updated_at TIMESTAMP,

    id_class INT NOT NULL,
    FOREIGN KEY (id_class) REFERENCES classes(id)
);

CREATE TABLE IF NOT EXISTS project(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    file VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    print_date TIMESTAMP,
    print_duration INT NOT NULL,
    description TEXT,
    feedback TEXT,

    id_user VARCHAR(100) NOT NULL,
    id_printer INT NOT NULL,
    id_status VARCHAR(30) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (id_printer) REFERENCES printer(id),
    FOREIGN KEY (id_status) REFERENCES project_status(id)
);

CREATE TABLE IF NOT EXISTS printer(
    id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,

    id_status INT NOT NULL,
    FOREIGN KEY (id_status) REFERENCES printer_status(id)
);