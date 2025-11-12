// === PRINCIPALES SENTENCIAS DE CONTROL EN JAVASCRIPT ===

// TIPO DE DATOS STRING
// creación
const miCadena = "Hola, soy una cadena de texto";
const segundaCadena = 'Hola, cadena con comillas simples';
const terceraCadena = `Hola, cadena con backticks`;

// concatenación
const saludoCompleto = miCadena + " " + segundaCadena;
const saludoTemplate = `Mi cadena completa es: ${miCadena} ${terceraCadena}`;

// escapar caracteres
const cadenaConComillas = "Ella dijo: \"Hola!\" y se fue.";
const cadenaConNuevaLinea = "Primera línea\nSegunda línea";

// === MÉTODOS DE STRINGS ===

// .length
console.log("Longitud de miCadena:", miCadena.length); // 29

// includes
console.log("¿miCadena incluye 'Hola'?", miCadena.includes("Hola")); // true

// indexOf 
console.log("Índice de 'cadena' en miCadena:", miCadena.indexOf("cadena")); // 14

// slice
console.log("Subcadena de miCadena:", miCadena.slice(0, 4)); // "Hola"

// toUpperCase y toLowerCase}
console.log("miCadena en mayúsculas:", miCadena.toUpperCase()); // "HOLA, SOY UNA CADENA DE TEXTO"
console.log("miCadena en minúsculas:", miCadena.toLowerCase()); // "hola, soy una cadena de texto"

// replace - replaceAll
console.log("Reemplazar 'cadena' por 'texto':", miCadena.replace("cadena", "texto")); // "Hola, soy una texto de texto"

// trim
console.log("Cadena sin espacios:", "   Hola Mundo   ".trim()); // "Hola Mundo"

// split
console.log("Dividir miCadena por espacios:", miCadena.split(" ")); // ["Hola,", "soy", "una", "cadena", "de", "texto"]


// TIPO DE DATO NUMBER

// creación
const miNumero = 42;
const numeroDecimal = 3.1415;

// MÉTODOS DE NUMBERS

// toFixed
console.log("Número con 2 decimales:", numeroDecimal.toFixed(2)); // "3.14"

// parseInt y parseFloat
console.log("Parsear '42' a entero:", parseInt("42")); // 42
console.log("Parsear '3.14' a float:", parseFloat("3.14")); // 3.14

// math
// Existen muchas funciones matemáticas en el objeto Math



// Condicionales
if (miNumero > 10) {
  console.log("miNumero es mayor que 10");
} else if (miNumero === 10) {
  console.log("miNumero es igual a 10");
} else {
  console.log("miNumero es menor que 10");
}

// Condicional ternario
const esMayorDeEdad = miNumero >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(esMayorDeEdad);


// Switch
const dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Día no válido");
}


// Bucles

// while
let contador = 0;
while (contador < 5) {
  console.log("Contador (while):", contador);
  contador++;
}

// do...while
contador = 0;
do {
  console.log("Contador (do...while):", contador);
  contador++;
} while (contador < 5);

// for
for (let i = 0; i < 5; i++) {
  console.log("Contador (for):", i);
}