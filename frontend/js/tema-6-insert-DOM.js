// TEXTCONTENT
const p = document.createElement('p');
p.textContent = 'Hola, soy un párrafo creado desde JS';
document.body.appendChild(p);

// INNERHTML
const div = document.createElement('div');
div.innerHTML = '<h2>Hola, soy un título creado desde JS</h2>';
document.body.appendChild(div);

// INNERTEXT
// Texto visible en pantalla, respeta estilos CSS (display: none, visibility: hidden)
const span = document.createElement('span');
span.innerText = 'Hola, soy un texto en un span creado desde JS';
document.body.appendChild(span);

// setHTML
// devuelve elementos del interior del elemento
const section = document.createElement('section');
section.insertAdjacentHTML('beforeend', '<h3>Hola, soy un título insertado con insertAdjacentHTML</h3>');
document.body.appendChild(section);

// outerHTML
// devuelve el elemento completo padre, incluyendo etiquetas de apertura y cierre
const article = document.createElement('article');
article.outerHTML = '<article><h4>Hola, soy un artículo insertado con outerHTML</h4></article>';
document.body.appendChild(article);


// REPLACECHILD
const oldParagraph = document.createElement('p');
oldParagraph.textContent = 'Este párrafo será reemplazado';
document.body.appendChild(oldParagraph);
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Este es el nuevo párrafo que reemplaza al anterior';
document.body.replaceChild(newParagraph, oldParagraph);


// INSERCION ADYACENTE
const list = document.createElement('ul');
list.innerHTML = '<li>Elemento 1</li><li>Elemento 2</li>';
document.body.appendChild(list);
list.insertAdjacentHTML('beforebegin', '<h5>Lista de elementos:</h5>');
list.insertAdjacentHTML('afterend', '<p>Fin de la lista.</p>');
list.insertAdjacentHTML('afterbegin', '<li>Elemento 0</li>');
list.insertAdjacentHTML('beforeend', '<li>Elemento 3</li>');


// === NAVEGAR POR EL DOM ===

// CHILDREN
const container = document.createElement('div');
container.innerHTML = '<p>Primer párrafo</p><p>Segundo párrafo</p><p>Tercer párrafo</p>';
document.body.appendChild(container);
console.log(container.children);

// FIRSTCHILD y LASTCHILD
console.log(container.firstChild);
console.log(container.lastChild);

// PARENTELEMENT
const childParagraph = container.children[1];
console.log(childParagraph.parentElement);

// NEXTSIBLING y PREVIOUSSIBLING
console.log(childParagraph.nextSibling);
console.log(childParagraph.previousSibling);