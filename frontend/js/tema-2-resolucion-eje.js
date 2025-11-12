// operadores logicos y de comparacion

// 1. Crear un programa que epermita ingresar 3 numeros y muestra si alguno de ellos es mayor a 100

console.log("Ejercicio 1 ---->");

// const numero1 = parseFloat(prompt("Ingrese el primer numero:"));
const num1 = 445;
const num2 = 44;
const num3 = 4;

const allNumbers = [num1, num2, num3];

const filterNumbers = allNumbers.filter(num => num > 100);
if (filterNumbers.length > 0) {
  filterNumbers.forEach( num => {
    console.log(`El numero ${num} es mayor a 100`);
  })
} else {
  console.log("Ningun numero es mayor a 100");
}



// 2. Crea un programa que pida al usuario ingresar un  número que represente el límite inferior del rango y otro número que represente el límite superior del rango. Luego, solicita al usuario ingresar un tercer número y verifica si este número se encuentra dentro del rango especificado (inclusive). Muestra un mensaje indicando si el número está dentro o fuera del rango.
console.log("Ejercicio 2 ---->");

// const lowerLimit = parseFloat(prompt("Ingrese el limite inferior del rango:"));

const lowerLimit = 1
const upperLimit = 9
const number = 5

console.log(`Rango: [${lowerLimit}, ${upperLimit}]`);

if (number >= lowerLimit && number <= upperLimit) {
  console.log(`El numero ${number} se encuentra dentro del rango`);
} else {
  console.log(`El numero ${number} se encuentra fuera del rango`);
}


// 3. Crea un programa que realice al usuario3 preguntas: si se ha hecho tatuakes recientemente, si se ha hecho tiene hepatitis, si tiene anemia. Si responde a alguna de ellas afirmativamente debe mostrar un mensaje que indique si puede o no donar sangre.
console.log("Ejercicio 3 ---->");



const hasTattoo = "no";
const hasHepatitis = "si";
const hasAnemia = "no";

// let hasTattoo = prompt("¿Se ha hecho tatuajes recientemente? (si/no)");
// while (!["si", "no"].includes(hasTattoo.toLowerCase())) {
//   hasTattoo = prompt("Respuesta invalida. ¿Se ha hecho tatuajes recientemente? (si/no)");
// }

// let hasHepatitis = prompt("¿Tiene hepatitis? (si/no)");
// while (!["si", "no"].includes(hasHepatitis.toLowerCase())) {
//   hasHepatitis = prompt("Respuesta invalida. ¿Tiene hepatitis? (si/no)");
// }

// let hasAnemia = prompt("¿Tiene anemia? (si/no)");
// while (!["si", "no"].includes(hasAnemia.toLowerCase())) {
//   hasAnemia = prompt("Respuesta invalida. ¿Tiene anemia? (si/no)");
// }

const tranformToBoolean = (answer) => {
  return answer.toLowerCase() === "si";
}

if (tranformToBoolean(hasTattoo) || tranformToBoolean(hasHepatitis) || tranformToBoolean(hasAnemia)) {
  console.log("No puede donar sangre");
} else {
  console.log("Sí Puede donar sangre");
}



// 4. Crear un programa que pida ingresar el usuario y la contraseña y los compare con el usuario y contraseña guardados en variables, y muestre en un mensaje si tiene el acceso autorizado
console.log("Ejercicio 4 ---->");

// let inputUsername = prompt("Ingrese su usuario:");

let inputUsername = "admin";
let inputPassword = "12345";

const savedUsername = "admin";
const savedPassword = "12345";


if ( inputPassword === savedPassword && inputUsername === savedUsername) {
  console.log("Acceso autorizado");
} else {
  console.log("Acceso denegado");
}



// 6. Un club tiene las siguientes reglas: sólo pueden entrar miembros que tengan la cuota al día, o no miembros que tengan autorización. Hacer un programa que pregunte estas si es miembro, si tiene la cuota al día y si tiene autorización y muestre luego un mensaje indicando si tiene el acceso permitido o no.
console.log("Ejercicio 6 ---->");


// const isMember = prompt("¿Es usted miembro del club? (si/no)");
const isMember = "no";

const message = {
  true: () => console.log("Acceso permitido"),
  false: () => console.log("Acceso denegado")
}

function verificateQuota () {
  // const hasQuotaUpToDate = prompt("¿Tiene la cuota al día? (si/no)");
  const hasQuotaUpToDate = "si";
  tranformToBoolean(hasQuotaUpToDate) ? message.true() : message.false();
}

function verificateAuthorization () {
  // const hasAuthorization = prompt("¿Tiene autorización? (si/no)");
  const hasAuthorization = "si";
  tranformToBoolean(hasAuthorization) ? message.true() : message.false();
}

tranformToBoolean(isMember) ? verificateQuota() : verificateAuthorization();


// 7. Hacer un programa que pida ingresar los valores de los tres parciales de la cátedra mostrar un mensaje indicando si promociona o no la cátedra. La misma se promociona si al menos dos de ellos fueron aprobados con una nota de 8 o más.
console.log("Ejercicio 7 ---->");

// const grade1 = parseFloat(prompt("Ingrese la nota del primer parcial:"));
// const grade2 = parseFloat(prompt("Ingrese la nota del segundo parcial:"));
// const grade3 = parseFloat(prompt("Ingrese la nota del tercer parcial:"));

const grade1 = 6;
const grade2 = 5;
const grade3 = 3;


const grades = [grade1, grade2, grade3];
const limitNote = 8;

const approveGrades = grades.filter( grade => grade >= limitNote)
console.log(`Notas aprobadas: [${approveGrades}]`);

const message2 = {
  true: () => console.log("Promociona la cátedra"),
  false: () => console.log("No promociona la cátedra")
}

approveGrades.length >= 2 ? message2.true() : message2.false();