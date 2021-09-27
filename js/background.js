const images = ["LOVE-34.jpg", "LOVE-40.jpg", "LOVE-46.jpg"];
const bgImage = document.createElement("img");

const todaysBg = images[Math.floor(Math.random() * images.length)];

bgImage.src = `img/${todaysBg}`;

// html에 요소를 추가 body 마지막 부분
document.body.appendChild(bgImage);
