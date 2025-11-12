// === ARROW FUNCTIONS ===

// Función tradicional
function sumar(a, b) {
  return a + b;
}

// Arrow function equivalente
const sumarArrow = (a, b) => a + b;

// Función tradicional con más de una línea
function saludar(nombre) {
  const saludo = `Hola, ${nombre}!`;
  return saludo;
}

// Arrow function equivalente
const saludarArrow = (nombre) => {
  const saludo = `Hola, ${nombre}!`;
  return saludo;
};

// expresiones simplificadas
const cuadrado = x => x * x;
const obtenerNombre = () => "Esteban";
const multiplicar = (a, b) => a * b;