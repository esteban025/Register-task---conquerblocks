//  === CLASES EN JS ===

// Definición de la clase
class Persona {
  // El método constructor se ejecuta al crear una nueva instancia de la clase
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método privado para saludar
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }

  // Métodos estáticos
  static descripcion() {
    console.log("Esta es una clase que representa a una persona.");
  }
}

const persona1 = new Persona("Esteban", 25);
persona1.saludar(); // Hola, mi nombre es Esteban y tengo 25 años.
Persona.descripcion(); // Esta es una clase que representa a una persona.


// GETTERS Y SETTERS
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }
  // Getter para calcular el área
  get area() {
    return this.calcularArea();
  }
  
  // setter para actualizar el ancho
  set setAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }

  // Método para calcular el área
  calcularArea() {
    return this.ancho * this.alto;
  }
}

const rectangulo1 = new Rectangulo(5, 10);
console.log(rectangulo1.area); // 50

// actualizamos el ancho usando el setter
rectangulo1.setAncho = 7;
console.log(rectangulo1.area); // 70



// HERENCIA
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hacerSonido() {
    console.log("El animal hace un sonido.");
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // Llamada al constructor de la clase padre
    this.raza = raza;
  }
  hacerSonido() {
    console.log("El perro ladra.");
  }
}

const miPerro = new Perro("Firulais", "Labrador");
miPerro.hacerSonido(); // El perro ladra.
