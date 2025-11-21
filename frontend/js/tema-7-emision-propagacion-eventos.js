// EVENTOS PERSONALIZADOS
const options = {
  names: 'Custom Event',
  detail: {
    info: 'Este es un evento personalizado',
  },
}
const messageEvent = new CustomEvent('message', options)


// PROPAGACION DE EVENTOS
// Existe un tercer parametro en el addEventListener de caracter booleano
// que por defecto es false, pero al cambiarle por true no sigue el efecto 
// adentro hacia afuera.


// CANCELACION DE EVENTOS
// El metodo preventDefault() cancela el evento en cuestion
// Por ejemplo, en los formularios, los enlaces, etc.

// target y currentTarget
document.addEventListener('click', (e) => {
  console.log('target:', e.target); // El elemento que disparo el evento
  console.log('currentTarget:', e.currentTarget); // El elemento que tiene el listener
})