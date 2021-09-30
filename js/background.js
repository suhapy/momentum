const images = [
  { img: "jeju.jpg", place: "Korea, Jeju" },
  { img: "porto.jpg", place: "Portugal, Porto" },
  { img: "frigiliana.jpg", place: "Spain, Frigiliana" },
];
const bgImage = document.createElement("img");
const bgCity = document.querySelector(".background-city");

const todaysBg = images[Math.floor(Math.random() * images.length)];

bgImage.classList.add("background-image");
bgImage.src = `img/${todaysBg.img}`;
bgCity.innerText = todaysBg.place;

// html에 요소를 추가 body 마지막 부분
document.body.appendChild(bgImage);
