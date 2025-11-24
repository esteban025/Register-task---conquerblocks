// === COOKIES ===
// Es una forma de almacenar datos en el navegador del usuario. Las cookies son pequeños archivos de texto que se guardan en el navegador y pueden ser accedidos por el servidor web o por el propio navegador.

// crear una cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// leer una cookie
const cookies = document.cookie;
console.log(cookies);

// setear una cookie
document.cookie = "theme=dark; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// eliminar una cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";


// === LOCAL STORAGE ===
// Es una forma de almacenar datos en el navegador del usuario de manera persistente. A diferencia de las cookies, los datos almacenados en el local storage no se envían al servidor con cada solicitud HTTP y tienen un tamaño mucho mayor (generalmente alrededor de 5MB por dominio).

// guardar datos en el local storage
localStorage.setItem('username', 'JohnDoe');

// leer datos del local storage
const username = localStorage.getItem('username');
console.log(username);

// eliminar datos del local storage
localStorage.removeItem('username');

// clear
localStorage.clear();

// key y length
const keyName = localStorage.key(0); // obtiene el nombre de la clave en la posición 0
const numberOfItems = localStorage.length; // obtiene el número de elementos almacenados



// === SESSION STORAGE ===
// Es similar al local storage, pero los datos almacenados en el session storage se eliminan cuando se cierra la pestaña o ventana del navegador. Cada pestaña o ventana tiene su propio session storage.

// guardar datos en el session storage
sessionStorage.setItem('sessionID', '123456');

// leer datos del session storage
const sessionID = sessionStorage.getItem('sessionID');
console.log(sessionID);

// eliminar datos del session storage
sessionStorage.removeItem('sessionID');

// clear
sessionStorage.clear(); 

// key y length
const sessionKeyName = sessionStorage.key(0); // obtiene el nombre de la clave en la posición 0
const sessionNumberOfItems = sessionStorage.length; // obtiene el número de elementos almacenados

// === stringify y parse ===
const user = {
  name: 'John Doe',
  age: 30,
  email: 'example@gmailcom'
}
// convertir objeto a string
const userString = JSON.stringify(user);
localStorage.setItem('user', userString);

// convertir string a objeto
const userStringFromStorage = localStorage.getItem('user');
const userObject = JSON.parse(userStringFromStorage);