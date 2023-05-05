apiKey = process.env.WEATHER-KEY;

async function weather(cityValue) {
    try {
        const a = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
        console.log(a);
    } catch (error) {
        console.log(error);
    }
}

weather('london');

/* Response {type: 'cors', url: 'https://api.openweathermap.org/data/2.5/weather?q=…pid=31ac23275854f9c11d7b50ea72b823b8&units=metric', redirected: false, status: 200, ok: true, …}


funciono*/