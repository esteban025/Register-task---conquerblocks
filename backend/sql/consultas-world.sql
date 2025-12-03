-- === EJEMPLO DE CONSULTAS SQL PARA LA BASE DE DATOS WORLD ===
USE world;

-- Seleccionar nombre y continente de todos los países
SELECT name, continent FROM country

-- Seleccionar nombre y población de países en Europa
SELECT name, population FROM country
WHERE continent = 'Europe';

-- Seleccionar los nombres de las cuidades ordenadas alfabéticamente
SELECT name FROM city ORDER BY name;

-- Seleccionar los primeros 5 países
SELECT name FROM country LIMIT 5

-- Seleccionar paises Asiaticos con población mayor a 1 billón
SELECT name, population FROM country
WHERE continent = 'Asia' AND population > 1000000000;

-- Seleccionar ciudades ordenadas por código de país y población descendente
SELECT name, population, country_code FROM city
ORDER BY country_code ASC, population DESC

-- Seleccionar países con independencia entre 1900 y 2000
SELECT name FROM country
WHERE indep_year BETWEEN 1900 AND 2000;

-- Seleccionar nombre de país y población dividida entre 10,000
SELECT name AS 'nombre pais', (population / 10000) AS 'poblacion entre 100000' FROM country

-- Seleccionar nombres de ciudades que comienzan con 'New'
SELECT name FROM city WHERE name LIKE 'New%';

-- Seleccionar nombres de países que no tienen año de independencia registrado
SELECT name FROM country WHERE indep_year IS NULL;

-- Seleccionar nombres del codigo de países en Europa usando subconsulta
SELECT name FROM country_code IN 
(SELECT code FROM country_code WHERE continent = 'Europe');