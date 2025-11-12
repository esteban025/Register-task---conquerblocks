// === FUNCIONES PARA ARRAYS ===

// Agregar elementos
const fruts = ['Manzana', 'Banana', 'Cereza'];
fruts.push('Naranja');  // Agrega al final
fruts.unshift('Fresa'); // Agrega al inicio
console.log(fruts); // ['Fresa', 'Manzana', 'Banana', 'Cereza', 'Naranja']

// modificar elementos
fruts[1] = 'Mango'; // Cambia 'Manzana' por 'Mango'
console.log(fruts); // ['Fresa', 'Mango', 'Banana', 'Cereza', 'Naranja']


// splice -> permite agregar, eliminar o reemplazar elementos en una posición específica
// .splice(índice, número de elementos a eliminar, elementos a agregar...)
fruts.splice(1, 0, 'Pera'); // Agrega 'Pera' en la posición 1 sin eliminar nada
fruts.splice(2, 1, 'Kiwi'); // Reemplaza 'Cereza' por 'Kiwi'
fruts.splice(3, 1); // Elimina el elemento en la posición 3

console.log(fruts); // ['Fresa', 'Pera', 'Kiwi', 'Naranja']

// slice -> crea una copia de una parte del array sin modificar el original
const citrus = fruts.slice(2, 4);

// justar arrays
const moreFruits = ['Uva', 'Melón'];
const allFruits = fruts.concat(moreFruits);
console.log(allFruits); // ['Fresa', 'Pera', 'Kiwi', 'Naranja', 'Uva', 'Melón']

// join -> convierte un array en una cadena de texto
// .join(separador)
const fruitString = fruts.join(', ');
console.log(fruitString); // "Fresa, Pera, Kiwi, Naranja"


// short -> ordena los elementos de un array
fruts.sort(); // Ordena alfabéticamente
fruts.reverse(); // Invierte el orden del array
console.log(fruts);


// Eliminar elementos
fruts.pop(); // Elimina el último elemento
fruts.shift(); // Elimina el primer elemento
fruts.splice(1, 1); // Elimina el elemento en la posición 1
fruts.length = 0; // Vacía el array