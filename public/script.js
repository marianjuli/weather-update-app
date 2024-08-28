// public/script.js

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('cityInput').value;
    const state = document.getElementById('stateInput').value;
    fetchWeather(city, state);
});

async function fetchWeather(city, state) {
    const url = `/weather?city=${city}&state=${state}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City/State not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const location = `${data.name}, ${data.sys.country}`;
    const description = data.weather[0].description;
    const temperature = `Temperature: ${data.main.temp} °F`;
    const humidity = `Humidity: ${data.main.humidity}%`;

    document.getElementById('location').textContent = location;
    document.getElementById('description').textContent = description;
    document.getElementById('temperature').textContent = temperature;
    document.getElementById('humidity').textContent = humidity;
}
