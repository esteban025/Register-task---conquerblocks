// === EVENTOS EN JS ===


// ES LA MEJOR MANERA DE INTERACTUAR CON EL USUARIO
// Seleccionamos el botón del DOM
const boton = document.querySelector('#miBoton');
// Seleccionamos el contenedor donde insertaremos el nuevo elemento
const contenedor = document.querySelector('#contenedor');
// Función que se ejecuta al hacer clic en el botón
function manejarClic() {
    // Crear un nuevo elemento párrafo
    const nuevoParrafo = document.createElement('p');
    // Establecer el texto del nuevo párrafo
    nuevoParrafo.textContent = '¡Has hecho clic en el botón!';
    // Insertar el nuevo párrafo en el contenedor
    contenedor.appendChild(nuevoParrafo);
}
// Asociar el evento 'click' al botón
boton.addEventListener('click', manejarClic);

// REMOVE EVENT LISTENER
boton.removeEventListener('click', manejarClic);

// OTRO EJEMPLO CON INPUT
const inputTexto = document.querySelector('#inputTexto');
const mostrarTexto = document.querySelector('#mostrarTexto'); 
function actualizarTexto() {
  mostrarTexto.textContent = inputTexto.value;
}
inputTexto.addEventListener('input', actualizarTexto);

// investigar para que sirve el DOMContentLoaded