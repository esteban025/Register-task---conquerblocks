// === SCOPE, HOISTING Y CLOSURES ===

// SCOPE: Ámbito de visibilidad de las variables
function ejemploScope() {
  const variableLocal = "Soy local";
  console.log(variableLocal); // Funciona
}
// --> console.log(variableLocal); // Error: variableLocal no está definida
ejemploScope();


// HOISTING: Comportamiento de elevación de declaraciones
// --> console.log(variableHoisted); // undefined (declaración elevada)
const variableHoisted = "Soy hoisted";


// CLOSURES: Funciones que recuerdan su entorno léxico
function crearContador() {
  let contador = 0;
  function incrementar() {
    contador++;
    return contador;
  }

  function decrementar() {
    contador--;
    return contador;
  }
  return {
    incrementar,
    decrementar
  }

}

const miContador = crearContador();
console.log(miContador.incrementar()); // 1
console.log(miContador.incrementar()); // 2