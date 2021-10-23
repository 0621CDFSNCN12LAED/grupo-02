CREATE DATABASE Deporteando;
USE Deporteando_db;

CREATE TABLE users (
id  INT PRIMARY KEY AUTO_INCREMENT,
"name" VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
"birth date" DATE NOT NULL,
email VARCHAR(30) UNIQUE NOT NULL,
avatar VARCHAR,
"password" password NOT NULL
);

CREATE TABLE categories (
id INT PRIMARY KEY AUTO_INCREMENT,
categorie VARCHAR(100) NOT NULL
);

CREATE TABLE user_categorie (
id INT PRIMARY KEY AUTO_INCREMENT,
idUser INT NOT NULL, FOREIGN KEY (idUser) REFERENCES Users(id),
idCategorie INT NOT NULL, FOREIGN KEY (idCategorie) REFERENCES categories(id),
);


CREATE Table events (
id INT PRIMARY KEY AUTO_INCREMENT,
created_at timestamp NULL DEFAULT NULL,
updated_at timestamp NULL DEFAULT NULL,
"name" VARCHAR(100) NOT NULL,
direction VARCHAR(100) NOT NULL,
"date" DATE NOT NULL,
start_time TIME NOT NULL,
end_time TIME NOT NULL,
price INT NOT NULL,
"description" VARCHAR(200) NOT NULL,
more_info VARCHAR(100) NOT NULL,
"image" VARCHAR(100) NOT NULL,
idUser INT NOT NULL, FOREIGN KEY(idUser) REFERENCES users(id),
idProvince INT NOT NULL, FOREIGN KEY(idProvince) REFERENCES provinces(id)
);

CREATE TABLE provinces(
id INT PRIMARY KEY AUTO_INCREMENT,
province VARCHAR(100) NOT NULL,
);

CREATE TABLE location(
id INT PRIMARY KEY AUTO_INCREMENT,
"location" ,
idProvince INT NOT NULL, FOREIGN KEY(idProvince) REFERENCES provinces(id)
);

CREATE TABLE sales(
id INT PRIMARY KEY AUTO_INCREMENT,
date_sale TIMESTAMP NULL DEFAULT NULL,
quantity INT TINYINT NOT NULL,
idEvent INT NOT NULL, FOREIGN KEY(idEvent) REFERENCES events(id),
idUser INT NOT NULL, FOREIGN KEY(idUser) REFERENCES users(id)
)

INSERT INTO Categories (Categorie) VALUES 

INSERT INTO Users (UserName, Email) 
VALUES


INSERT INTO Notes (Title, Creation, Descriptions, Modification, Delete_, idUser) 
VALUES


INSERT INTO note_categorie (idNote, idCategorie) VALUES
