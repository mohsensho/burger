CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT auto_increment NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY(id)
);