const API_KEY = "2751bb4a6535d24c2f3fa77683519ced";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span");
      weather.innerText = `${data.name} / ${data.weather[0].main} ${data.main.temp}℃`;
    });
}
function onGeoError() {
  alert("You cannot see your city and weather.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
