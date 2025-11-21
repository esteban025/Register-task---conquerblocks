
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelector(selector);

// Cambio de imagen con teclas numéricas
const listImages = [
  "https://picsum.photos/seed/mi-semilla/200",
  "https://picsum.photos/seed/puppy/200",
  "https://picsum.photos/seed/sunset/200",
  "https://picsum.photos/seed/mountains/200",
  "https://picsum.photos/seed/coffee/200",
  "https://picsum.photos/seed/ocean/200",
  "https://picsum.photos/seed/forest/200",
  "https://picsum.photos/seed/space/200",
  "https://picsum.photos/seed/flower/200",
  "https://picsum.photos/seed/city/200",
]

const pictureElement = $('.change-images picture img');

document.addEventListener('keydown', (e) => {
  // e.preventDefault();
  listImages.forEach((img, idx) => {
    if (e.key == idx) {
      pictureElement.src = img;
    }
  })
})


// Movimiento de caja con teclas
const $box = $('.box-move');
let positionX = 0;
let positionY = 0;

document.addEventListener('keydown', (e) => {
  // e.preventDefault();
  switch (e.key) {
    case 'ArrowLeft':
      positionX -= 10;
      $box.style.transform = `translate(${positionX}px, ${positionY}px)`;
      break;
    case 'ArrowRight' : 
      positionX += 10;
      $box.style.transform = `translate(${positionX}px, ${positionY}px)`;
      break;
    case 'ArrowDown':
      positionY += 10;
      $box.style.transform = `translate(${positionX}px, ${positionY}px)`;
      break;

    case 'ArrowUp':
      positionY -= 10;
      $box.style.transform = `translate(${positionX}px, ${positionY}px)`;
      break;
  }
})


// Lista de ingredientes desordenada
const $btnOrdenar = $('.btns button:first-child');
const $btnNewItem = $('.btns button:last-child');
const $listIngredients = $('.list-ingredients');

const newLi = (text) => {
  const listItem = document.createElement('li');
  listItem.textContent = text;

  const btnDelete = document.createElement('button');
  btnDelete.textContent = 'X';
  btnDelete.classList.add('btn-delete');

  listItem.appendChild(btnDelete);
  $listIngredients.appendChild(listItem);
}

$btnOrdenar.addEventListener('click', (e) => {
  e.preventDefault();
  let itemsArray = Array.from($listIngredients.children);
  const listSorted = [];
  
  itemsArray.forEach(item => {
    // Clonar el elemento y eliminar el botón para obtener solo el texto
    const clonedItem = item.cloneNode(true);
    const btn = clonedItem.querySelector('.btn-delete');
    if (btn) btn.remove();
    listSorted.push(clonedItem.textContent.trim());
  });
  
  listSorted.sort();

  $listIngredients.innerHTML = '';

  listSorted.forEach(ingredient => newLi(ingredient));
})

// Delegación de eventos: escucha en el contenedor padre
$listIngredients.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-delete')) {
    e.preventDefault();
    console.log(e.target.parentElement);
    e.target.parentElement.remove(); // Elimina el elemento
  }
})


$btnNewItem.addEventListener('click', (e) => {
  e.preventDefault()
  const newItemText = prompt("Ingrese el nuevo ingrediente:");
  if (newItemText) newLi(newItemText);
})


// Parrafo dinamico

const $dinamicSection = $('.dinamic-paragragh p:last-child');
document.addEventListener('keydown', (e) => {
  console.log(e.key);

  if(!isNaN(e.key) || e.key.includes('Arrow')) return;
  
  // Manejar Backspace para borrar
  if (e.key === 'Backspace') {
    e.preventDefault();
    $dinamicSection.textContent = $dinamicSection.textContent.slice(0, -1);
    return;
  }
  
  // Solo aceptar caracteres de longitud 1 (letras, símbolos)
  // Esto excluye teclas como CapsLock, Shift, Control, etc.
  if (e.key.length === 1) {
    $dinamicSection.textContent += e.key;
  }
})