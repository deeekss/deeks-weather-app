function displayWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

function search(event) {
  event.preventDefault();
  let newCityInput = document.querySelector("#current-city");
  let searchInput = document.querySelector("#search-input");
  newCityInput.innerHTML = `${searchInput.value}`;
  let city = searchInput.value;
  let key = "e73c4be11o1t827c45e67a30e6f63ea0";
  let apiKey = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;

  axios.get(apiKey).then(displayWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
let day = currentTime.getDay();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let presentDay = days[day];
currentDate.innerHTML = `${presentDay}, ${hours}:${minutes}`;
