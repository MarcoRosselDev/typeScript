import './style.css'

const apiKey = import.meta.env.VITE_WHEATER_KEY

document.querySelector('#app').innerHTML = `
    <div class="container">
        <h2>Weather App</h2>
        <form action="">
            <input type="text" placeholder="input the city name...">
            <!-- <button type="submit">Get Weather</button> -->
            <!-- podemos add a button pero el input type submit lo envia por defecto
            con el button tendriamos que escuchar el evento click -->
            <input type="submit" value="Get Weather" class="btn">
        </form>
        <div class="details">
            
        </div>
    </div>
`


async function weather(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
        
        if (!response.ok) {
            const details = document.querySelector('.details')
            details.innerHTML = `<h2 class="temperature">Ciudad no encontrada</h2>`
        }
        
        const data = await response.json()

        // get data from api response
        const city = data.name;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const temperature = `${Math.round(data.main.temp)} ° C`;
        const humedad = `${data.main.humidity} %`;
        const feelsLike = Math.round(data.main.feels_like);
        const windSpeed = data.wind.speed;

        // pushed on html dom
        const details = document.querySelector('.details')
        details.innerHTML = `
        <h2 class="temperature">${city}</h2>
        <img src="http://openweathermap.org/img/wn/${icon}.png" alt="icon weather" class="icon">
        <h2 class="temperature">${temperature}</h2>
        <p class="description">${description}</p>
        <div class="anotherDetails">
            <div class="box">
                <p>Feels like ${feelsLike} ° C</p>
            </div>
            <div class="box">
                <p>${humedad} humidity</p>
            </div>
            <div class="box">
                <p>${windSpeed} m/s</p>
            </div>
        </div>
        `
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


const btn = document.querySelector('.btn');
const valueInpt = document.querySelector('input')

btn.addEventListener('click', function (e) {
    e.preventDefault()
    weather(valueInpt.value);
})