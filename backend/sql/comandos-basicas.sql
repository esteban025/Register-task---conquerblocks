-- === COUNT ===
-- Descripción: Cuenta el número de filas en una tabla o el número de filas que cumplen una condición específica.
SELECT COUNT(*) AS total_filas FROM nombre_tabla;


-- === SUM ===
-- Descripción: Calcula la suma total de una columna numérica en una tabla o el total de una columna que cumple una condición específica.
SELECT SUM(nombre_columna) AS suma_total FROM nombre_tabla;

-- === AVG ===
-- Descripción: Calcula el valor promedio de una columna numérica en una tabla o el promedio de una columna que cumple una condición específica.
SELECT AVG(nombre_columna) AS promedio FROM nombre_tabla;

-- === MIN / MAX ===
-- Descripción: Encuentra el valor mínimo o máximo de una columna en una tabla o el valor mínimo o máximo de una columna que cumple una condición específica.
SELECT MIN(nombre_columna) AS valor_minimo, MAX(nombre_columna) AS valor_maximo FROM nombre_tabla;


-- === GROUP BY ===
-- Descripción: Agrupa las filas que tienen los mismos valores en columnas especificadas y permite realizar funciones de agregación en cada grupo.
SELECT columna_agrupada, COUNT(*) AS total_filas
FROM nombre_tabla
GROUP BY columna_agrupada;

-- === HAVING ===
-- Descripción: Filtra los grupos creados por la cláusula GROUP BY según una condición específica.
SELECT columna_agrupada, COUNT(*) AS total_filas
FROM nombre_tabla
GROUP BY columna_agrupada
HAVING COUNT(*) > 5;