function getWeather(response) {
  let currentTempElement = document.querySelector(".temp-value");
  currentTempElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = response.data.city;
  console.log(response);
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
