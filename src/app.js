

function displayTemperature(response) {
   let temperature = Math.round(response.data.temperature.current);
   let temperatureElement = document.querySelector("#temperature");
   temperatureElement.innerHTML =`${temperature}`;
   let description = document.querySelector("#weather-description");
  description.innerHTML = response.data.condition.description;
   let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
  let windElement = document.querySelector("#windSpeed");
  windElement.innerHTML = Math.round(response.data.wind.speed);
let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML = response.data.temperature.humidity;
let iconElement = document.querySelector("#icon");
iconElement.setAttribute(
  "src",
  `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
);
  iconElement.setAttribute("alt", response.data.condition.description);
}

  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let am_pm = now.getHours() >= 12 ? " PM" : "AM";

  let dateElement = document.querySelector("#currentDate");
  dateElement.innerHTML = `${day}, ${hours}:${minutes} ${am_pm}`;





function search(city) {
let apiKey = "3oed67abe28tbf31a403d1a6050a989a";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#cityInput");
    search(cityInputElement.value);
    
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("New York");