DROP DATABASE IF EXISTS sistem_movies_db;
CREATE DATABASE sistem_movies_db;
USE sistem_movies_db;

-- Crear tablas
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE movies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  release_year INT NOT NULL
);

--insert informacion en tablas
INSERT INTO users (name, email) VALUES
  ('Alice Jonhson', 'alicejonhson@gmail.com'),
  ('Bob Smith', 'bobsmith@gmail.com'),
  ('Charlie Brown', 'charliebrown@gmail.com')
;
INSERT INTO movies (title, release_year) VALUES
  ('Titanic ', 1998),
  ('Inception', 2010),
  ('The Matrix', 1999),
  ('Interstellar', 2014),
;

-- === Consultar datos ===
SELECT * FROM users;
SELECT * FROM movies;


