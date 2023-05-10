import './style.css';

const key = import.meta.env.VITE_WHEATER_KEY_2;

// data 3.0
//const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`

async function latLong(city) {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`);
  const data = await response.json()
  console.log(data);
}

latLong(sydney);

/* document.querySelector('.app').innerHTML = `
  <div>
  </div>
`;
 */