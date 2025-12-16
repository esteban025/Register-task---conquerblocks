USE sakila;

SELECT rating , AVG(rental_rate) as tarifa_promedio,
  (SELECT AVG(renta_rate) FROM film) as tarifa_global
;

-- JOINS
-- UNO A UNO
SELECT * FROM actor AS a JOIN address AS ad ON a.address_id = ad.address_id;
-- UNO A MUCHOS
SELECT * FROM actor AS a JOIN film_actor AS fa ON a.actor_id = fa.actor_id;
SELECT * FROM actor AS a JOIN film_actor AS fa ON a.actor_id = fa.actor_id JOIN film AS f ON fa.film_id = f.film_id;
-- MUCHOS A MUCHOS
SELECT * FROM actor AS a JOIN film_actor AS fa ON a.actor_id = fa.actor_id JOIN film AS f ON fa.film_id = f.film_id;
SELECT * FROM actor AS a JOIN film_actor AS fa ON a.actor_id = fa.actor_id JOIN film AS f ON fa.film_id = f.film_id JOIN inventory AS i ON f.film_id = i.film_id;