const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Crea un programa que apartir de una nutrida variedad de elementos html los coloree con colores aleatorios cada vez que se coloque el mouse sobre ellos y los vuelva a colorear de blanco cuando el raton los abandone

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const blocks = $$('.cards-whites > article div');

blocks.forEach( block => {
  block.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = generateRandomColor();
  })

  block.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = 'white';
  })

  block.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert(`Color actual: ${e.target.style.backgroundColor}`);
  })
})