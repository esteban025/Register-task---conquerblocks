// === FUNCIONES PARA ARRAYS - PARTE 2 ===

// Ordenación de arrays

const edades = [33, 15, 20, 40, 5, 12];

const alumnos = [
  { nombre: "Esteban", edad: 33 },
  { nombre: "Ana", edad: 15 },
  { nombre: "Luis", edad: 20 },
]
// .sort() modifica el array original
// .sort( primer-elemento , segundo-elemento ) => valor-numérico
// Si el valor numérico es negativo, el primer elemento va antes que el segundo
// Si el valor numérico es positivo, el segundo elemento va antes que el primero
// Si el valor numérico es 0, no se cambia el orden entre ambos elementos

// menor -> mayor
edades.sort((a, b) => a - b);
console.log(edades); // [5, 12, 15, 20, 33, 40]

alumnos.sort((a, b) => a.edad - b.edad);
console.log(alumnos); 

// mayor -> menor
edades.sort((a, b) => b - a);
console.log(edades); // [40, 33, 20, 15, 12, 5]
alumnos.sort((a, b) => b.edad - a.edad);
console.log(alumnos);




// Buscar primitivos en un array

const numeros = [10, 20, 30, 40, 50];

// .includes( elemento-buscado ) => true / false
console.log(numeros.includes(20)); // true
console.log(numeros.includes(25)); // false

// .indexOf( elemento-buscado ) => índice / -1
console.log(numeros.indexOf(30)); // 2
console.log(numeros.indexOf(35)); // -1

// find y findIndex para buscar objetos en un array

alumnos.find( alumno => alumno.edad > 18 ); // primer alumno mayor de 18
alumnos.findIndex( alumno => alumno.edad > 18 ); // índice del primer alumno mayor de 18


// Spread operator (...) para copiar arrays
const newNumbers = [60, 70, 80];
const copiaNumeros = [...numeros, ...newNumbers];
console.log(copiaNumeros); // [10, 20, 30, 40, 50, 60, 70, 80]

// Spread operator (...) para copiar objetos
const alumnoEsteban = { nombre: "Esteban", edad: 33 };
const alumnoCopia = { ...alumnoEsteban, ciudad: "Madrid" };
console.log(alumnoCopia); // { nombre: "Esteban", edad: 33, ciudad: "Madrid" }