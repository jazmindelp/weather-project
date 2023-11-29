function getWeather(response) {
  //temperature
  let currentTempElement = document.querySelector(".temp-value");
  currentTempElement.innerHTML = Math.round(response.data.temperature.current);

  //city
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = response.data.city;

  //description
  let descriptionElement = document.querySelector(".description");
  descriptionElement.innerHTML = response.data.condition.description;

  //humidity
  let humidityElement = document.querySelector("#humidity-value");
  humidityElement.innerHTML = response.data.temperature.humidity;

  //wind speed
  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = response.data.wind.speed;

  //current day & time

  let date = new Date(response.data.time * 1000);
  let currentDateElement = document.querySelector(".current-day");
  currentDateElement.innerHTML = formatDate(date);
}

function formatDate(date) {
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${days[day]}, ${hours}:${minutes}`;
}
function searchCity(city) {
  let apiKey = "325bc6t05fe26b896fe3169ea4b9o059";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-form-input");

  //send the value to the function
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("London");
