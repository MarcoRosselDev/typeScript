import './style.css';

async function pokeApi(namePokemon) {

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`);
    const data = await response.json();
    if (!data) {
      console.log('no se encontraron datos');
    } else{
      console.log(data);

      const imgFromnt = data.sprites.other.dream_world.front_default;
      console.log(imgFromnt);

      result.innerHTML = `
        <img src=${imgFromnt} alt="pokemon testing">
      `
    }
  } catch (error) {
    throw new Error('ocurrio un error inesperado !');
  }
}

const input = document.querySelector('.inpt');
const btnSearch = document.querySelector('.btnSearch');
const result = document.querySelector('.result');

btnSearch.addEventListener('click', function (event) {
  event.preventDefault();
  pokeApi(input.value)
})

//pokeApi('charmander');

/* response successful
{abilities: Array(2), base_experience: 62, forms: Array(1), game_indices: Array(20), height: 6, …}
*/

/* document.querySelector('#app').innerHTML = `
  <div>
  </div>
`; */
