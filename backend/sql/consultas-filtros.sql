-- === CONSULTAS Y FILTROS SQL ===
-- Este archivo contiene consultas SQL y filtros utilizados en la aplicación backend.

-- === ORDEN DE CONSULTA ===
-- SELECT -> columna | *
-- FROM -> tabla
-- WHERE -> condición (operadores =, <>, >, <, >=, <=, LIKE, IN, BETWEEN, AND, OR, NOT)
-- ORDER BY -> columna ASC | DESC
-- LIMIT -> número de filas


-- SELECT
-- WHERE
-- AND, OR, NOT
-- ORDER BY


--Ejemplo completo de consulta SQL
SELECT name AS nombre FROM users 
WHERE email LIKE '%gmail.com' LIMIT 2;