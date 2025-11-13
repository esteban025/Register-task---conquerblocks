// === Ejercicios de arrays ===

const alumnos = [
  {
    id: 1,
    nombre: "Esteban",
    edad: 17,
    master: "fullstack"
  },
  {
    id: 2,
    nombre: "Ana",
    edad: 24,
    master: "blockchain"
  },
  {
    id: 3,
    nombre: "Luis",
    edad: 29,
    master: "ia"
  },
  {
    id: 4,
    nombre: "Sofia",
    edad: 15,
    master: "fullstack"
  },
  {
    id: 5,
    nombre: "Carlos",
    edad: 27,
    master: "blockchain"
  }
]

const datosAleatorios = [
  34,
  "hola",
  true,
  23,
  "javascript",
  false,
  45,
]

// 1. Dado un array de números, crear una función vAbsoluto que reciba un array y que devuelve un array con los valores absolutos de los números del array que se pasa como parámetro

const vAbs = (arr) => arr.map( num => Math.abs(num))

const numbers = [-10, 15, -20, 25, -30];

const numbersAbs = vAbs(numbers);
console.log('Números absolutos:', numbersAbs); // [10, 15, 20, 25, 30]



// 2. Dado un array de datos aleatorios, crear una función llamada porTipos que devuelve un objeto con claves por tipo de dato y clasifique los valores del array pasado como parámetro segun su tipo
const porTipos = (arr) => {
  return arr.reduce( (acc, curr) => {
    const tipo = typeof curr;
    if (!acc[tipo]) {
      acc[tipo] = [];  
    }
    acc[tipo].push(curr);
    return acc;
  },{})
}

const datosClasificados = porTipos(datosAleatorios);
console.log('Datos clasificados por tipo:', datosClasificados);


// 3. Dado el array de alumnos, crear una función getFullStackStudents a la que se lo pasamos como parámetro y nos devuelva únicamente a los alumnos que pertenezcan a la formación Full Stack

const nameToSearch = "fullstack";
const getFullStackStudents = (arr, nameMaster) => arr.filter( alum => alum.master === nameMaster );

const fullStackStudents = getFullStackStudents(alumnos, nameToSearch);
console.log('Alumnos de Full Stack:', fullStackStudents);



// 4. Dado el array de alumnos, crear una función llamada nStudentFullStack que nos devuelva el número de usuarios que pertenecen a dicha formación. De igual manera para el resto de las formaciones

const mastername = "blockchain";
const nStudentMaster = (arr) => {
  return arr.reduce((acc, curr) => {
    const master = curr.master;
    if (!acc[master]) {
      acc[master] = 0;
    }
    acc[master]++;
    return acc;
  }, {})
}
console.log('Número de alumnos por máster:', nStudentMaster(alumnos));



// 5. Dado el array de alumnos, crear una función llamada getAdultStudents que reciba el array por parámetro y devuelva un array únicamente de los mayores de edad
const baseAge = 18;

const getAdultStudents = arr => arr.filter( alum => alum.edad >= baseAge );

const adultStudents = getAdultStudents(alumnos);
console.log('Alumnos mayores de edad:', adultStudents);



// 6. Dado el array de alumnos, crear una función llamada mayor que reciba el array como parámetro y que devuelva el alumno mayor de toda la lista de alumnos

const mayor = arr => arr.reduce((acc, curr) => {
  return (curr.edad > acc.edad) ? curr : acc;
}, arr[0]);
const alumnoMayor = mayor(alumnos);
console.log('Alumno mayor:', alumnoMayor);



// 8. Dado el array de alumnos, crear una función llamada agruparPor que reciba dos parámetros, primero el array y luego un string con la propiedad por la que queremos agrupar de las posibles de los alumnos. La función devolverá un objeto con una propiedad por cada uno de los valores posibles de la propiedad pasada como parámetro. Te lo explico con un ejemplo mejor.

const agruparPor = (arr, prop) => {
  return arr.reduce((acc, curr) => {
    const key = curr[prop];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
  }, {})
}
const propertyToGroup = 'master';
const alumnosAgrupadosPorMaster = agruparPor(alumnos, propertyToGroup);
console.log('Alumnos agrupados por máster:', alumnosAgrupadosPorMaster);