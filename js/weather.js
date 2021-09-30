function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(`You are in ${lat}, ${lng}`);
}
function onGeoError() {
  alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
