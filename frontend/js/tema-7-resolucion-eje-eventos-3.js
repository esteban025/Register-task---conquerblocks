const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const containerGame = $('.colors-game');

const rows = 6;
const cols = 5;
containerGame.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

// creacion de colores
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const totalColors = (rows * cols) / 2;
const colorsArray = [];
for (let i = 0; i < totalColors; i++) {
  const color = getRandomColor();
  colorsArray.push(color);
  colorsArray.push(color);
}

// creacion de cajas
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= cols; j++) {
    const box = document.createElement('div');
    const boxFaceFront = document.createElement('div');
    const boxFaceBack = document.createElement('div');

    box.classList.add('box');
    boxFaceFront.classList.add('face', 'front');
    boxFaceBack.classList.add('face', 'back');

    box.appendChild(boxFaceFront);
    box.appendChild(boxFaceBack);

    const randomIndex = Math.floor(Math.random() * colorsArray.length);
    const boxColor = colorsArray[randomIndex];
    boxFaceBack.style.backgroundColor = boxColor;

    colorsArray.splice(randomIndex, 1);
    containerGame.appendChild(box);
  }
}

const boxes = $$('.colors-game > div');
let firstBox = null;
let secondBox = null;
boxes.forEach(box => {
  if (box.classList.contains('matched')) alert('Juego terminado');
  box.addEventListener('click', () => {
    if (box === firstBox) return; // evitar seleccionar la misma caja
    box.classList.toggle('rotated')

    if (!firstBox) {
      firstBox = box
    } else if(!secondBox) {
      secondBox = box
    };

    if (firstBox && secondBox) {
      const firstColor = firstBox.querySelector('.back').style.backgroundColor;
      const secondColor = secondBox.querySelector('.back').style.backgroundColor;

      if (firstColor === secondColor) {
        firstBox.classList.add('matched');
        secondBox.classList.add('matched');
        setTimeout(() => {
          firstBox.style.scale = 0;
          secondBox.style.scale = 0;
          firstBox = null;
          secondBox = null;
        }, 800);

      } else {
        setTimeout(() => {
          firstBox.classList.remove('rotated');
          secondBox.classList.remove('rotated');
          firstBox = null;
          secondBox = null;
        }, 600);

      }
    }

  });
});