const apiKey = "cd921f65ec10927e3f0da46004ed26b7"; // Your OpenWeatherMap API key
        const weatherButton = document.getElementById('get-weather');
        const cityInput = document.getElementById('city-input');
        const weatherInfo = document.getElementById('weather-info');
        const cityName = document.getElementById('city-name');
        const temperature = document.getElementById('temperature');
        const weatherDescription = document.getElementById('weather-description');
        const weatherIcon = document.getElementById('weather-icon');
    
        weatherButton.addEventListener('click', () => {
            const city = cityInput.value;
            if (city) {
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
                    .then(response => response.json())
                    .then(data => {
                        // Display the weather info
                        const temp = data.main.temp;
                        const desc = data.weather[0].description;
                        const icon = data.weather[0].icon;
                        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    
                        cityName.textContent = data.name;
                        temperature.textContent = `${temp}°C`;
                        weatherDescription.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
                        weatherIcon.innerHTML = `<img src="${iconUrl}" alt="${desc}">`;
    
                        weatherInfo.classList.remove('hidden');
                        weatherInfo.classList.add('visible');
                    })
                    .catch(error => {
                        alert("City not found! Please try again.");
                    });
            } else {
                alert("Please enter a city.");
            }
        });