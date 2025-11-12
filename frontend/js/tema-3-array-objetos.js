// Tipos de referencia

// === ARRAYS ===

// formas de crear arrays
const fruts = ["manzana", "banana", "cereza"];
const newFruts = new Array("naranja", "pera", "uva");
const newFruts2 = [];

// obtener elementos de un array
console.log(fruts[0]); // manzana

// remplazar elementos de un array
fruts[1] = "kiwi";
console.log(fruts); // ["manzana", "kiwi", "cereza"]

// Atributos y metodos importantes de los arrays
console.log(fruts.length); // 3

fruts.push("mango"); // agrega un elemento al final
console.log(fruts); // ["manzana", "kiwi", "cereza", "mango"]

fruts.pop(); // elimina el ultimo elemento
console.log(fruts); // ["manzana", "kiwi", "cereza"]

fruts.unshift("fresa"); // agrega un elemento al inicio
console.log(fruts); // ["fresa", "manzana", "kiwi", "cereza"]

fruts.shift(); // elimina el primer elemento
console.log(fruts); // ["manzana", "kiwi", "cereza"]

// recorrer con un for of
for (const frut of fruts) {
  console.log(frut);
}



// === OBJETOS ===
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};

// obtener propiedades del objeto
console.log(persona.nombre); // Juan
console.log(persona["edad"]); // 30

// eliminar un clave - valor}
delete persona.ciudad;
console.log(persona); // { nombre: "Juan", edad: 30 }

// recorrer con for in 
for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}