// === API, ASYNC/AWAIT Y FETCH ===

// Que es una API?
// API significa Application Programming Interface (Interfaz de Programación de Aplicaciones). Es un conjunto de reglas y protocolos que permiten que diferentes aplicaciones se comuniquen entre sí. 

// Las APIs definen cómo los desarrolladores pueden interactuar con una aplicación o servicio, proporcionando acceso a sus funcionalidades y datos sin necesidad de conocer los detalles internos de su implementación.

// En una API podemos realizar las siguientes operaciones:
// - Crear (Post) --> get/todos
// - Leer (Get) --> get/todos/1
// - Actualizar (Update) --> put/todos/1
// - Eliminar (Delete) --> delete/todos/1

// fetch siempre devuelve una promesa resuelta
const url = 'https://jsonplaceholder.typicode.com/users/1';

// fetch con .then() y .catch()
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Datos obtenidos con .then():', data);
  })
  .catch((error) => {
    console.error('Error capturado con .catch():', error);
  });

// === USANDO ASYNC/AWAIT CON FETCH ===
// La palabra clave async se utiliza para declarar una función asíncrona, lo que significa que la función siempre devolverá una promesa. Dentro de una función async, puedes usar la palabra clave await para esperar a que una promesa se resuelva antes de continuar con la ejecución del código.

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }
    const data = await response.json();
    console.log('Datos obtenidos con async/await:', data);
  } catch (error) {
    console.error('Error capturado con try/catch:', error);
  }
}

fetchData();