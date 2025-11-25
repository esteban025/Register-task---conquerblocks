// === FUNCIONES DE CARRERA CON PROMESAS ===

// metodo all
// retorna un array con los resultados de todas las promesas si todas se resuelven
const funcion1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Función 1 completada");
    }, 2000);
  });
}
const funcion2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Función 2 completada");
    }, 1000);
  });
}
const funcion3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Función 3 completada");
    }, 1500);
  });
}
Promise.all([funcion1(), funcion2(), funcion3()])
  .then((resultados) => {
    console.log("Resultados de Promise.all:", resultados);
  })
  .catch((error) => {
    console.error("Error en Promise.all:", error);
  });

// metodo race
// retorna la primera promesa que se resuelva o rechace
Promise.race([funcion1(), funcion2(), funcion3()])
  .then((resultado) => {
    console.log("Resultado de Promise.race:", resultado);
  })
  .catch((error) => {
    console.error("Error en Promise.race:", error);
  });

// metodo any
// retorna la primera promesa que se resuelva
Promise.any([funcion1(), funcion2(), funcion3()])

// metodo allSettled
// retorna un array con el estado de todas las promesas
Promise.allSettled([funcion1(), funcion2(), funcion3()])
  .then((resultados) => {
    console.log("Resultados de Promise.allSettled:", resultados);
  });


// === ARGUMENTOS ===
// Ejemplo de uso de argumentos en funciones de promesas
const funcionConArgumentos = (mensaje, tiempo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mensaje);
    }, tiempo);
  });
}  

// Ejemplo de promesas concadenadas con argumentos
functionWithArgs = () => {
  funcionConArgumentos("Mensaje 1", 1000)
    .then((resultado1) => {
      console.log(resultado1);
      return funcionConArgumentos("Mensaje 2", 500);
    })
    .then((resultado2) => {
      console.log(resultado2);
      return funcionConArgumentos("Mensaje 3", 1500);
    })
    .then((resultado3) => {
      console.log(resultado3);
    });
}