const clock = document.querySelector(".clock");

function displayClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}`;
}

displayClock();
setInterval(displayClock, 1000);
