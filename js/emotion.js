const emotionBtn = document.querySelectorAll(".emotion__btn");
const emotionBtnGood = document.querySelector(".emotion__btn-good");
const emotionBtnSoso = document.querySelector(".emotion__btn-soso");
const emotionBtnBad = document.querySelector(".emotion__btn-bad");
const emotionAnswer = document.querySelector(".emotion__answer");

const emotions = [
  { btn: emotionBtnGood, answer: "하루종일 행복한 일이 가득할 거예요!" },
  { btn: emotionBtnSoso, answer: "기분 좋은 행운이 찾아올 거예요!" },
  { btn: emotionBtnBad, answer: "하루는 쉬어가도 괜찮아요!" },
];

function paintAnswer(event) {
  const index = emotions.findIndex((item) => item.btn === event.target);
  emotionAnswer.innerText = emotions[index].answer;
}

emotionBtn.forEach((element) => {
  element.addEventListener("click", paintAnswer);
});
