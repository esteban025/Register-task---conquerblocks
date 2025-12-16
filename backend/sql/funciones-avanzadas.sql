-- === GROUP_CONCAT ===
-- Descripción: Combina valores de una columna en una sola cadena, separados por un delimitador especificado.
SELECT GROUP_CONCAT(nombre_columna SEPARATOR ', ') AS valores_concatenados
FROM nombre_tabla;

-- === DISTINCT ===
-- Descripción: Devuelve valores únicos de una columna, eliminando duplicados.

-- === WITH ROLLUP ===
-- Descripción: Agrega filas adicionales a los resultados de una consulta GROUP BY para mostrar totales acumulados.
SELECT columna_agrupada, SUM(nombre_columna) AS suma_total
FROM nombre_tabla
WHERE condición_específica
GROUP BY columna_agrupada WITH ROLLUP;

-- === CASE en GROUP BY ===
-- Descripción: Permite realizar agrupaciones condicionales basadas en diferentes criterios utilizando la expresión CASE.
SELECT 
    CASE 
        WHEN nombre_columna < 10 THEN 'Bajo'
        WHEN nombre_columna BETWEEN 10 AND 20 THEN 'Medio'
        ELSE 'Alto'
    END AS categoria,
    COUNT(*) AS total_filas
FROM nombre_tabla
GROUP BY categoria;