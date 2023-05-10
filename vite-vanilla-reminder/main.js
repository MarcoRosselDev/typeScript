import './style.css';

const key = import.meta.env.VITE_WHEATER_KEY

// data 3.0
//const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`

/* async function latLong(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);

    if (!response.ok) {
      console.log('fallo');
    }
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

latLong(santiago); */

/* document.querySelector('.app').innerHTML = `
  <div>
  </div>
`;
 */
const app = document.querySelector('.app');


async function weather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    
    const data = await response.json()
    if (!data) {
      app.innerHTML = `
      <h1>not found</h1>
      `;
    }
    console.log(data);
    
  } catch (error) {
    console.log(error);
  }
}

const input = document.querySelector('.inpt');
const btn = document.querySelector('.btn');
btn.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(input.value);
})

//weather('london')