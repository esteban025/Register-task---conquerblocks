// === CREACION DE ELEMENTOS DEL DOM ===

// Crear un nuevo elemento
const nuevoElemento = document.createElement("div");
nuevoElemento.id = "mi-nuevo-div";
nuevoElemento.className = "clase-div";
nuevoElemento.textContent = "Hola, soy un nuevo div creado con JavaScript.";

// crear un comment
const comentario = document.createComment("Este es un comentario en el DOM");
// agregar el comentario al nuevo elemento
nuevoElemento.appendChild(comentario);

// crear un textNode
const textoNodo = document.createTextNode(" Este es un nodo de texto.");
nuevoElemento.appendChild(textoNodo);


// crear un clonNode
const clonElemento = nuevoElemento.cloneNode(true); // true para clonar con hijos

// isConnected
console.log(nuevoElemento.isConnected); // false, aún no está en el DOM

// Agregar el nuevo elemento al DOM
document.body.appendChild(nuevoElemento);

// textContent vs innerText vs innerHTML
const otroDiv = document.createElement("div");
otroDiv.innerHTML = "<strong>Texto en negrita</strong> y <em>texto en cursiva</em>.";
document.body.appendChild(otroDiv);

// primer appendChild y contenido
const primerDiv = document.createElement("div");
primerDiv.appendChild(document.createTextNode("Primer contenido"));
primerDiv.appendChild(document.createTextNode(" - Segundo contenido"));
document.body.appendChild(primerDiv);