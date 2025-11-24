// === EJERCICIOS SEGUNDA PARTE ===

// Ejercicio 1
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $parragraph = $('.search-paragraph > p')
const $btnhiddenText = $$('.btns-hidden-text > button');

$btnhiddenText.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const vocal = e.target.textContent;
    $parragraph.textContent = $parragraph.textContent.replaceAll(vocal, '');
    e.target.disabled = true;
  })
})


// Ejercicio 2
// pusaciones de caja con mas rapidez
const $boxGreen = $('.box-green');
const $boxRed = $('.box-red');

let widthMoreRed = 0
let widthMoreGreen = 0

document.addEventListener('keydown', (e) => {
  // let win = ''
  function checkWin(winner) {
    alert(`¡La caja ${winner} ha ganado!`);
    widthMoreGreen = 0;
    widthMoreRed = 0;
    $boxGreen.style.width = `10px`;
    $boxRed.style.width = `10px`;
    return;
  }

  if(e.key === 'a'){
    if( widthMoreGreen >= 500) checkWin('verde');
    widthMoreGreen += 10;
    $boxGreen.style.width = `${widthMoreGreen}px`;
  }
  if(e.key === 'n'){
    if( widthMoreRed >= 500) checkWin('roja');
    widthMoreRed += 10;
    $boxRed.style.width = `${widthMoreRed}px`;
  }
})

