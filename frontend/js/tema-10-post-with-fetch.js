//  === POST con Fetch ===

const url = "https://jsonplaceholder.typicode.com/posts";
const usersUrl = "https://jsonplaceholder.typicode.com/users";

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const $selectedInput = $('#select-id');
const $form = $('#post-form');

// fetch -> users
const getUsers = async () => {
  try {
    const response = await fetch(usersUrl);
    if (!response.ok) {
      throw new Error('Error en la solicitud de usuarios: ' + response.status);
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
}

const users = async () => {
  const usuarios = await getUsers();
  usuarios.forEach(user => {
    const option = `<option value="${user.id}">${user.name}</option>`;
    $selectedInput.insertAdjacentHTML('beforeend', option);
  });
}
users();

const postDataSend = async (postData) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    if (!res.ok) {
      throw new Error('Error en la solicitud POST: ' + res.status);
    } else {
      console.log('Post enviado correctamente');
    }

  } catch (err) {
    console.error('Error al enviar el post:', err);
  }
}

// obtener datos del formularios
$form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData($form);
  const postData = {
    userId: parseFloat(formData.get('select-id')),
    title: formData.get('title-post').trim(),
    completed: formData.get('check-completed') === 'on' ? true : false
  };
  postDataSend(postData)
  $form.reset();
})

