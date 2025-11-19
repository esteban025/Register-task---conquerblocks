// === ACCESOS A ATRIBUTOS BÁSICOS ===
const enlace = document.getElementById("enlace-conquerblocks");
  console.log(enlace.href); // Accedemos al atributo href
  console.log(enlace.target); // Accedemos al atributo target
  console.log(enlace.className); // Accedemos al atributo class
  console.log(enlace.id); // Accedemos al atributo id
  console.log(enlace.textContent); // Accedemos al texto del enlace

// === MODIFICAR ATRIBUTOS BÁSICOS ===
enlace.href = "https://www.conquerblocks.com/nuevo-enlace";
enlace.target = "_self";
enlace.className = "nuevo-estilo-enlace";
// varias clases
enlace.className = "clase-1 clase-2 clase-3";
enlace.id = "nuevo-id-enlace";
enlace.textContent = "Visita ConquerBlocks - Nuevo Enlace";
enlace.style.color = "black"; // Cambiamos el color del enlace a negro

// getAttribute y setAttribute
enlace.getAttribute("href"); // Accedemos al atributo href
enlace.setAttribute("href", "https://www.conquerblocks.com/otro-enlace"); // Modificamos el atributo href

enlace.setAttribute("data-custom-attr", "valor-personalizado");
console.log(enlace.getAttribute("data-custom-attr")); // Accedemos al atributo personalizado

// remove attribute
enlace.removeAttribute("data-custom-attr");
console.log(enlace.getAttribute("data-custom-attr")); // Verificamos que se ha eliminado



console.log(enlace);