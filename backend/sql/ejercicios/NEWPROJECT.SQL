-- LIBRERIA CON TABLAS SENSILLAS
DROP DATABASE IF EXISTS libreria_db;
CREATE DATABASE libreria_db;
USE libreria_db;

-- tabla de libros
CREATE TABLE libros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  autor VARCHAR(100) NOT NULL,
  anio INT NOT NULL CHECK (anio >= 1000 AND anio <= 3000),
  disponible BOOLEAN NOT NULL DEFAULT TRUE,
);

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
);

CREATE TABLE prestamos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  libro_id INT NOT NULL,
  usuario_id INT NOT NULL,
  fecha_prestamo DATE NOT NULL DEFAULT CURRENT_DATE,
  fecha_devolucion DATE,

  FOREIGN KEY (libro_id) REFERENCES libros(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
);

-- insertar informacion
INSERT INTO libros (titulo, autor, anio) VALUES
('El principito', 'Antoine de Saint-Exupéry', 1943),
('El Quijote', ' Miguel de Cervantes', 1615),
('Cien años de soledad', ' Gabriel Garcia Marquez', 1967);
('Harry Potter y la Piedra Filosofal', 'J.K. Rowling', 1997);
('La sombra del viento', 'Carlos Ruiz Zafon', 2001);

INSERT INTO usuarios (nombre, email) VALUES
('Juan', 'juan@gmail.com'),
('Maria', 'maria@gmail.com'),
('Paul', 'paulguahcichullca@gmail.com');

INSERT INTO prestamos (libro_id, usuario_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 1),
(5, 2);

-- actualizamod la disponibilidad
UPDATE libros SET disponible = FALSE WHERE id IN (1, 2);


-- consultas
-- libros disponibles
SELECT titulo, autor, anio FROM libros
WHERE disponible = TRUE
ORDER BY anio DESC;

-- libros prestados
SELECT 
  u.nombre AS usuario, 
  l.titulo AS libro,
  p.fecha_prestamo,
  DATEDIFF(CURRENT_DATE, p.fecha_prestamo) AS dias_prestado,
FROM prestamos p
JOIN libros l ON p.libro_id = l.id
JOIN usuarios u ON p.usuario_id = u.id
WHERE p.fecha_devolucion is NULL;

-- indices de optimizacion
CREATE INDEX idx_libros_disponibles ON libros(disponible);
CREATE INDEX idx_prestamos_devolucion ON prestamos(fecha_devolucion);
