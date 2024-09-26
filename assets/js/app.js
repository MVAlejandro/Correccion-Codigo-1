const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

const $n = document.querySelector('.name'); // Se cambia la forma en que se llama a las clases
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) { // Se cambia la función a async para poder implementar await
  $n.textContent = 'cargando...';

  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // Obtener el JSON de la respuesta

  console.log(data);
  $n.textContent = `${data.name}`; // Se cambian comillas simples por comillas invertidas para correcto funcionamiento
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`
} // displayUser

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` // Se añade $n para coincidir con las variables declaradas
} // handleError

displayUser('stolinski').catch(handleError);