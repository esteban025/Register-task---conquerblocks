-- se trabajara con la db sakira para este ejemplo
USE sakila;

-- count - conteo de todas las filas
SELECT COUNT(*) AS total_movies FROM film;
SELECT COUNT(*) AS movies_costosas FROM film WHERE replacement_cost > 20;
SELECT COUNT(DISTINCT rating) AS types_rating FROM film;

-- sumatorias
SELECT SUM(replacement_cost) AS costo_replacement_total FROM film;
SELECT SUM(rental_duration) AS dias_renta_PG FROM film WHERE rating = 'PG';

-- promedios
SELECT AVG(length) AS duration_promedio_NC17 FROM film WHERE rating = 'NC-17';
SELECT rating, AVG(rental_rate) AS tarifa_promedio FROM film GROUP BY rating;

-- min - max
SELECT MIN(rental_rate) AS min_rental_rate FROM film;
SELECT MAX(rental_rate) AS max_rental_rate FROM film;
SELECT MIN(length) AS min_length FROM film;

-- having
SELECT rating, COUNT(*) AS num_movies FROM film GROUP BY rating HAVING COUNT(*) > 10;
SELECT rating, AVG(rental_rate) AS tarifa_promedio FROM film GROUP BY rating HAVING AVG(rental_rate) > 2;
SELECT rating, COUNT(*) AS num_movies FROM film GROUP BY rating HAVING COUNT(*) > 10;