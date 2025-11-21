// === CLASSLIST ===
const box = document.querySelector('.box');
console.log(box.classList); // DOMTokenList ["box", value: "box"]

// Agregar una clase
box.classList.add('new-class');
console.log(box.classList); // DOMTokenList ["box", "new-class", value: "box new-class"]

// length
console.log(box.classList.length); // 2

// item
console.log(box.classList.item(0)); // box
console.log(box.classList.item(1)); // new-class

// contains
console.log(box.classList.contains('box')); // true
console.log(box.classList.contains('other-class')); // false

// remove
box.classList.remove('new-class');
console.log(box.classList); // DOMTokenList ["box", value: "box"]

// toggle
box.classList.toggle('toggle-class');
console.log(box.classList); // DOMTokenList ["box", "toggle-class", value: "box toggle-class"]
box.classList.toggle('toggle-class');
console.log(box.classList); // DOMTokenList ["box", value: "box"]

// replace
box.classList.replace('box', 'replaced-box');
console.log(box.classList); // DOMTokenList ["replaced-box", value: "replaced-box"]

// === DATASET ===
const dataBox = document.querySelector('.data-box');

// accedemos a los datos personalizados
// camelCase
console.log(dataBox.dataset.info); // some data
console.log(dataBox.dataset); // DOMStringMap {info: "some data", id: "123"}