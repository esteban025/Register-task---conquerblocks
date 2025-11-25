// === Promesas ===

// Las promesas son objetos que representan la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

// Crear una promesa
const miPromesa = new Promise((resolve, reject) => {
  const exito = true;
  if (exito) {
    resolve("¡La operación fue exitosa!");
  } else {
    reject("La operación falló.");
  }
});

// Consumir una promesa
miPromesa
  .then((mensaje) => {
    console.log(mensaje); // "¡La operación fue exitosa!"
  })
  .catch((error) => {
    console.error(error); // "La operación falló."
  })
  .finally(() => {
    console.log("Operación finalizada.");
  });

//  metodos estáticos de las promesas

// Promise.all: Espera a que todas las promesas se resuelvan
const promesa1 = Promise.resolve(3);
const promesa2 = 42;
const promesa3 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promesa1, promesa2, promesa3]).then((valores) => {
  console.log(valores); // [3, 42, "foo"]
});