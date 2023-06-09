import './style.css';

async function pokeApi(namePokemon) {

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`);
    const data = await response.json();
    if (!data) {
      console.log('no se encontraron datos');
    } else{
      console.log(data);

      //const imgFromnt = data.sprites.other.dream_world.front_default;
      const imgFromnt = data.sprites.other.home.front_default;
      const pokeName = data.name;
      const tipo = data.types[0].type.name;

      // se puede mejorar perguntando el numero de habilidades para iterar por ahi
      const abilities = data.abilities[0].ability.name;
      const abilities2 = data.abilities[1].ability.name;
      const id = data.id;
      
      const thi = data.this;
      console.log(thi);
      //console.log(data.chain.evolves_to[0].evolves_to[0].species.name)
      async function evolution(ident) {
        try {
          const response2 = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${ident}`);
          const data2 = await response2.json();

          if (!data2) {
            console.log('no se entonctro data2 dentro del primer fetch');
          } else{
            console.log(data2);
          }
        } catch (error) {
          throw new Error('error dentro del segundo try catch');
        }
      }
      // error id no coinside con la evolucion, por ejemplo 4 es charmander
      // pero id 4 en evolucion es ratata, por lo que no me sirve el id extraido de data.
      evolution(4);

      result.innerHTML = `
      <img src=${imgFromnt} alt="pokemon testing" class="imgPoke">
      <p>name : ${pokeName}</p>
      <p>abilitie 1 : ${abilities}</p>
      <p>abilitie 2 : ${abilities2}</p>
      <p>element tipe : ${tipo}</p>
      <p>id : ${id}</p>
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
  input.value = '';
})

//pokeApi('charmander');

/* response successful
{abilities: Array(2), base_experience: 62, forms: Array(1), game_indices: Array(20), height: 6, …}
*/

/* document.querySelector('#app').innerHTML = `
  <div>
  </div>
`; */
