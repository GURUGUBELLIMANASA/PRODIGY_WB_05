const apiKey = "a5bbcc34a83976f87f0fb8b1caed55f4";

// Fetch weather by city
function getWeatherByCity() {
    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if (data.cod !== 200) {
            alert(data.message);
            return;
        }

        displayWeather(data);
    })
    .catch(error => {
        console.error("ERROR:", error);
        alert("Error fetching data. Check internet or API.");
    });
}

// Display data
function displayWeather(data) {
    if (!data.main || !data.weather) {
        alert("Invalid data received");
        return;
    }

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = `🌡 Temperature: ${data.main.temp}°C`;
    document.getElementById("condition").innerText = `☁ Condition: ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText = `🌬 Wind: ${data.wind.speed} m/s`;
}