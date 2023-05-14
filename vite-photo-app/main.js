import './style.css';

const publicKey = import.meta.env.VITE_KEY_UNSPLASH;
const div = document.querySelector('#app')

async function getAPhoto() {

  try {
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${publicKey}`);
    const data = await response.json();
    console.log(data);

    if (!data) {
      // push dom a div with a message like "no se encontraron resultados";
    } else {
      let finalDom = '';
      for (let i = 0; i < data.length; i++) {
        finalDom += `<p>${data[i].alt_description}</p>`;
      }
      div.innerHTML = finalDom;
    }
  } catch (error) {
    console.log('se produjo un error en la funcion getAPhoto');
  }
}

getAPhoto();