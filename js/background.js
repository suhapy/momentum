const images = ["0.jpg", "1.jpg", "2.jpg"];
const bgImage = document.createElement("img");

const todaysBg = images[Math.floor(Math.random() * images.length)];

bgImage.classList.add("background-image");
bgImage.src = `img/${todaysBg}`;

// html에 요소를 추가 body 마지막 부분
document.body.appendChild(bgImage);
