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
    const nameCity = data.name;
    const temperatura = data.main.temp;
    const viento = data.wind.speed;
    const tempPersivida = data.main.feels_like;
    const humedad = data.main.humidity;

    app.innerHTML = `
    <img src="#" alt="">
        <h2>${nameCity}</h2>
        <h2>${temperatura}</h2>
        <div class="moreInfo">
          <article>${viento} viento</article>
          <article>${tempPersivida} temperatura persivida</article>
          <article>${humedad} humedad</article>
    </div>
    `
    
  } catch (error) {
    console.log(error);
  }
}

const input = document.querySelector('.inpt');
const btn = document.querySelector('.btn');
btn.addEventListener('click', function (event) {
  event.preventDefault();
  weather(input.value)
})

//weather('london')