import './style.css';

async function pokeApi(namePokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`);
  const data = await response.json();

  if (!data) {
    console.log('no se encontraron datos');
  } else{
    console.log(data);
  }
}

pokeApi('charmander');

/* response successful
{abilities: Array(2), base_experience: 62, forms: Array(1), game_indices: Array(20), height: 6, …}
*/

document.querySelector('#app').innerHTML = `
  <div>
  </div>
`;
