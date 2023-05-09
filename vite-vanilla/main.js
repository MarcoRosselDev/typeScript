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
            <img src="#" alt="icon weather" class="icon">
            <h2 class="temperature">4 ° C</h2>
            <p class="description">overcast clouds</p>
            <div class="anotherDetails">
                <div class="box">
                    <p>Feels like 3 ° C</p>
                </div>
                <div class="box">
                    <p>Humidity 81%</p>
                </div>
                <div class="box">
                    <p>Wind speed: 154 m/s</p>
                </div>
            </div>
        </div>
    </div>
`


async function weather(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
        
        if (!response.ok) {
            throw new Error('La respuesta no fue bien')
        }
        
        const data = await response.json()

        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const temperature = `${Math.round(data.main.temp)} ° C`;

        const descripText = document.querySelector('.description').innerText = description;
        const tempText = document.querySelector('.temperature').innerText = temperature;
        const iconSrc = document.querySelector('.icon').src = `http://openweathermap.org/wn/${icon}.png`

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


const btn = document.querySelector('.btn');
const valueInpt = document.querySelector('input')

btn.addEventListener('click', function (e) {
    e.preventDefault()
    console.log('clicked');
    weather(valueInpt.value);
})