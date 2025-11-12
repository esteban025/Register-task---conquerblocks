// clase 4 === FUNCIONES JS ===

// forma completa de todo lo que podria tener una fncion
function myFunciton (param1 = 2, param2 = "cantidades") {
  // cuerpo de la funcion
  const message = `La funcion tiene los parametros: ${param1} y ${param2}`;
  // toda funcion puede retornar un valor
  return message;
};

// las funciones se llaman despues de ser declaradas
const resultado = myFunciton(5, "productos");

console.log(resultado); // La funcion tiene los parametros: 5 y productos



// DECLARAR VARIABLES QUE GUARDEN FUNCIONES
const sumar = function (a, b) {
  return a + b;
}
const resultadoSuma = sumar(3, 7);
console.log(`El resultado de la suma es: ${resultadoSuma}`); // El resultado de la suma es: 10



// FUNCIONES AUTOEJECUTABLES
(function () {
  console.log("Esta funcion se ejecuta automaticamente");
})();



// CLOUSURES

function crearContador() {
  let contador = 0;

  return {
    incrementar: function() {
      contador++;
      console.log(`Contador: ${contador}`);
    },
    decrementar: function() {
      contador --;
      console.log(`Contador: ${contador}`);
    },
    obtenerValor: function() {
      return contador;
    }
  }
}

const miContador = crearContador();
miContador.incrementar(); // Contador: 1
miContador.incrementar(); // Contador: 2
miContador.decrementar(); // Contador: 1