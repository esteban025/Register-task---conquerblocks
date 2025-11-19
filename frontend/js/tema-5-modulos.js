// === MÓDIULOS ===

// export --> Permite exportar funciones, objetos o variables desde un archivo para que puedan ser utilizadas en otros archivos.
// import --> Permite importar funciones, objetos o variables desde otros archivos.

// ejemplo
// archivo: matematicas.js
export function sumar(a, b) {
  return  + b;
}
export function restar(a, b) {
  return a - b;
}

// archivo: main.js
import { sumar, restar } from './matematicas.js';

console.log(sumar(5, 3));