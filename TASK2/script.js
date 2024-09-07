async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '97a1c9f5809979c2b55a30b9c6b03ae3';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('humidity').textContent = data.main.humidity;
        } else {
            alert('City not found!');
        }
    } catch (error) {
        alert('Failed to fetch weather data');
    }
}