// Отримати погоду за допомогою OpenWeatherMap API Опис:
//  Використайте публічне API OpenWeatherMap для отримання поточної погоди.
//  Зробіть GET-запит за адресою https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY},
//  де {city} - назва міста, а {API_KEY} - ваш ключ API OpenWeatherMap. Перегляньте отримані дані щодо погоди.

fetch("https://api.openweathermap.org/data/2.5/weather?q=Lviv&APPID=17901880cf618f6a938a98535f079158").then(response => response.json()).then(data => document.querySelector(".info").innerHTML = makeList(data))
function makeList(obj){
    const placeholder = `<ul class="weather-list">
            <li><p>Погода: ${obj.weather[0].main}</p></li>
            <li><p>Кількість хмар: ${obj.clouds.all}</p></li>
            <li><p>Вологість: ${obj.main.humidity} г/м^3</p></li>
            <li id="wind"><p>Вітер</p>
            <p>Швидкість вітру: ${obj.wind.speed} км/год
            </br>
            Напрям вітру: ${obj.wind.deg} градусів
            </br>
            Порив вітру: ${obj.wind.gust}
            </br>
            </p>
            </li>
            
        </ul>`
        return placeholder
}

fetch("https://api.openweathermap.org/data/2.5/weather?q=Lviv&APPID=17901880cf618f6a938a98535f079158").then(response => response.json()).then(data => console.log(data))
