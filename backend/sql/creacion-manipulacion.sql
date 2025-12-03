-- === OBJETIVO DE LA CLASE ===

-- Aprender a crear bases de datos y tablas, así como a manipular datos utilizando SQL.

-- Crear una base de datos llamada 'empresa'
IF EXISTS DATABASE empresa DROP DATABASE empresa;
CREATE DATABASE empresa;

-- Usar la base de datos 'empresa'
USE empresa;

-- Crear una tabla llamda 'empleados
CREATE TABLE empleados  (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  puesto VARCHAR(50) NOT NULL,
  salario DECIMAL(10, 2) NOT NULL
);

-- === TIPOS DE DATOS COMUNES ===
-- INT: Números enteros
-- VARCHAR(n): Cadenas de texto de longitud variable con un máximo de n caracteres
-- DECIMAL(p, s): Números decimales con p dígitos en total y s dígitos después del punto decimal
-- DATE: Fecha en formato AAAA-MM-DD
-- BOOLEAN: Valores verdadero (TRUE) o falso (FALSE)
-- TEXT: Cadenas de texto largas

-- === RESTRICCIONES BASICAS ===
-- PRIMARY KEY: Identificador único para cada fila
-- NOT NULL: La columna no puede tener valores nulos
-- UNIQUE: Los valores en la columna deben ser únicos
-- AUTO_INCREMENT: Incrementa automáticamente el valor de la columna para cada nueva fila
-- DEFAULT: Establece un valor predeterminado para la columna si no se proporciona uno
-- FOREIGN KEY: Establece una relación entre dos tablas

-- Insertar datos en la tabla 'empleados'
INSERT INTO empleados (nombre, apellido, puesto, salario) VALUES
('Juan', 'Pérez', 'Gerente', 75000.00),
('María', 'Gómez', 'Desarrolladora', 60000.00),
('Luis', 'Rodríguez', 'Diseñador', 55000.00);

-- Select para ver los datos insertados
SELECT * FROM empleados;
z

