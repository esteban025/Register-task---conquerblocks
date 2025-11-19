// === EJERCICIOS ===

// CALCULADORA

// Propiedades
// resultado (número), inicializa en 0

// Métodos
// sumar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
// restar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
// multiplicar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
// dividir(numero): divide resultado por numero, y actualiza resultado con el valor de dicha operación
// obtenerResultado(): devuelve resultado
// reiniciar(): pone resultado en 0

// Observaciones
// arrojar un error cuando el argumento ingresado no sea un número, con Number.isFinite()
// arrojar un error cuando se intenta dividir por 0

class Calculadora {
  constructor() {
    this.resultado = 0;
  }
  validarNumero(num){
    if(!Number.isFinite(num)){
      throw new Error("El argumento debe ser un número finito");
    }
  }

  sumar(num){
    this.validarNumero(num);
    this.resultado += num;
  }
  restar(num){
    this.validarNumero(num);
    this.resultado -= num;
  }
  multiplicar(num){
    this.validarNumero(num);
    this.resultado *= num;
  }
  dividir(num){
    this.validarNumero(num);
    if(num === 0){
      throw new Error("No se puede dividir por 0");
    }
    this.resultado /= num;
  }
  resultado(){
    return this.resultado;
  }
  reiniciar(){
    this.resultado = 0;
  }
}

const calc = new Calculadora();
console.log(calc.resultado); // 0
calc.sumar(10);
// calc.multiplicar("d");
console.log(calc.resultado);
calc.sumar(10);
console.log(calc.resultado);


// AUTO

class Auto {
  constructor(marca, modelo, placa) {
    this.encendido = false;
    this.velocidad = 0;
    this.marca= marca;
    this.modelo = modelo;
    this.placa = placa;
  }

  // Métodos
  encender() {
    this.encendido = true
    console.log("Auto encendido")
  }
  apagar() {
    if (this.velocidad === 0) {
      this.encendido = false
    }
    throw new Error("No se puede apagar el auto en movimiento")
  }
  acelerar() {
    if (this.encendido ){
      this.velocidad += 10
    }else {
      throw new Error("No se puede acelerar con el auto apagado")
    }
  }
  desacelerar() {
    if (this.velocidad >= 10) {
      this.velocidad -= 10
    }
  }
  toString() {
    return `${this.marca} - ${this.modelo}, Placa: ${this.placa}`
  }
}
const auto1 = new Auto("Toyota", "Corolla", "ABC-123");
console.log(auto1.toString());
auto1.encender();
auto1.acelerar();
auto1.acelerar();
console.log(`Velocidad: ${auto1.velocidad} km/h`);
auto1.desacelerar();
auto1.desacelerar();
console.log(`Velocidad: ${auto1.velocidad} km/h`);


//TELEVISOR

class Televisor {
  constructor(marca, canales) {
    // encendido, canal, canales, volumen, marca
    this.encendido = false;
    this.canal = 1;
    this.canales = canales; // cantidad de canales
    this.volumen = 0;
    this.marca = marca;
  }

  // Métodos
  encenderApagar() {
    this.encendido = !this.encendido;
  }

  siguienteCanal() {
    if (this.encendido) {
      this.canal === this.canales 
        ? this.canal = 1 
        : this.canal += 1;
    }
  }
  anteriorCanal() {
    if (this.encendido) {
      this.canal === 1 
        ? this.canal = this.canales 
        : this.canal -= 1;
    }
  }
  cambiarCanal(canal) {
    if (this.encendido) {
      const condition = this.canal >= 1 && canal <= this.canales;

      condition ? this.canal = canal : (() => {throw new Error("Canal inválido")})()
    }
  }
  subirVol() {
    if (this.encendido && this.volumen < 100) {
      this.volumen += 1;
    }
  }
  bajarVol() {
    if (this.encendido && this.volumen > 0) {
      this.volumen -= 1;
    }
  }
  toStrign() {
    return `Televisor ${this.marca} - Canales: ${this.canales}, Canal Actual: ${this.canal}, Volumen Actual: ${this.volumen}`;
  }
}

const tv1 = new Televisor("Samsung", 100);
console.log(tv1.toStrign());
tv1.encenderApagar();
// tv1.cambiarCanal(10);
tv1.cambiarCanal(88);
tv1.subirVol();
tv1.subirVol();
tv1.subirVol();
tv1.bajarVol();
console.log(tv1.toStrign());