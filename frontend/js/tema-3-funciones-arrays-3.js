// === FUNCIONES DE ARRAYS ===
const alumnos = [
  {id: 1, nombre: "Esteban", edad: 28, curso: "JS" },
  {id: 2, nombre: "Ana", edad: 22, curso: "Python" },
  {id: 3, nombre: "Luis", edad: 35, curso: "JS" },
  {id: 4, nombre: "Marta", edad: 19, curso: "Java" },
];

//  spread operator
const estebanAlumno = {
  ...alumnos[0],
  ciudad: "Madrid",
};
console.log("Esteban Alumno:", estebanAlumno);



// every -> devuelve true si TODOS los elementos cumplen la condición
const todosMayoresDe18 = alumnos.every(alumno => alumno.edad >= 18);
console.log("¿Todos los alumnos son mayores de 18?", todosMayoresDe18); // true


// some -> devuelve true si ALGÚN elemento cumple la condición
const algunAlumnoMenorDe18 = alumnos.some(alumno => alumno.edad > 18);
console.log("¿Algún alumno es menor de 18?", algunAlumnoMenorDe18); // true

const algunAlumnoDe40 = alumnos.some(alumno => alumno.edad === 40);
console.log("¿Algún alumno tiene 40 años?", algunAlumnoDe40); // false


// filter -> devuelve un nuevo array con los elementos que cumplen la condición
// .filter(  )
const alumnosJS = alumnos.filter(alumno => alumno.curso === "JS");
console.log("Alumnos de JS:", alumnosJS);


// map -> devuelve un nuevo array transformando cada elemento
const nombresAlumnos = alumnos.map(alumno => alumno.nombre);
console.log("Nombres de los alumnos:", nombresAlumnos);


// reduce -> reduce el array a un único valor
// .reduce( (acumulador, elementoActual) => { ... }, valorInicial )
const edadTotal = alumnos.reduce((total, alumno) => total + alumno.edad, 0);
console.log("Edad total de los alumnos:", edadTotal); // 104


// ejercicio:

const newListAlumnos = alumnos.map( alum => {
  const isMayorEdad = alum.edad >= 18 ? true : false;
  return {
    ...alum,
    mayorEdad: isMayorEdad
  }
})
console.log("New List Alumnos:", newListAlumnos);