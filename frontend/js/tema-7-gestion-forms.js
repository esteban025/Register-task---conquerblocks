console.log("Gestionando formularios");

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $btnSend = $("#btn-submit");
const $btnReset = $("#btn-reset");
const $form = $("#test-form");

$btnSend.addEventListener('click', (e) => {
  e.preventDefault()
  // validacion  de correo
  const inputEmail = document.getElementById("email").value;
  if(!inputEmail.includes("@")){
    alert("Por favor ingrese un correo valido");
    return;
  }

  // validamos edad
  const inputAge = parseInt(document.getElementById("age").value);
  if(isNaN(inputAge) || inputAge < 18 || inputAge > 38){
    alert("Debes ser mayor de edad para registrarte");
    return;
  }

  console.log("Enviando formulario");
})

$btnReset.addEventListener('click', (e) => {
  e.preventDefault()
  $form.reset();
  console.log("Formulario reseteado");
})

// FOCUS Y BLUR
const $inputEmail = $("#email");

$inputEmail.addEventListener('focus', (e) => {
  console.log("El input de email esta en foco");
})
$inputEmail.addEventListener('blur', (e) => {
  console.log("El input de email perdio el foco");
})

// CHANGE
$inputEmail.addEventListener('change', (e) => {
  console.log("El valor del input de email ha cambiado a: ", e.target.value);
})