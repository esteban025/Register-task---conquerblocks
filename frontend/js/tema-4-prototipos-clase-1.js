// HERENCIA POR CLASE TÍPICA

// que es un prototipo
// es un objeto del cual otros objetos heredan propiedades y métodos

// en js cada función tiene una propiedad llamada prototype
// esta propiedad es un objeto que contiene los métodos y propiedades que serán heredados por los objetos creados a través de esa función

// EJEMPLOS
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
Persona.prototype.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
}
const juan = new Persona('Juan', 30);
juan.saludar(); // Hola, mi nombre es Juan y tengo 30 años.