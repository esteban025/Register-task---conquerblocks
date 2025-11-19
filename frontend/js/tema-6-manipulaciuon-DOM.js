//  === SELECCION DE ELEMENTOS ===

// Seleccionadores
// ID --> devuelve HTML element
const h1 = document.getElementById('titulo-principal');
// class --> devuelve HTML collection
const p = document.getElementsByClassName('parrafo');
// class - id  --> devuelve NodeList
const pClass = document.querySelector('.parrafo');
const pId = document.querySelector('#parrafo');
// etiqueta --> devuelve NodeList
const enlaces = document.querySelectorAll('a');
// etiqueta --> devuelve HTML collection
const divs = document.getElementsByTagName('div');
// name --> devuelve un NodeList
const inputName = document.getElementsByName('nombre');

// BUSQUEDAS ACOTADAS
const divContainer = document.querySelector('.container');
const pContainer = divContainer.getElementsByTagName('p');

// === HTMLCOLLECTION vs NODELIST ===
// HTMLCollection --> No es un array, no se puede iterar inmediatamente es una coleccion en vivo
// NodeList --> Es una coleccion esttica, se puede iterar con forEach