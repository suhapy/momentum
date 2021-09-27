const quotes = [
  {
    img: "보건교사안은영_정세랑.jpg",
    quote: "“칙칙한 호러물이 아니라 마구 달리는 소년 만화여야 했다고.”",
    author: "보건교사 안은영 - 정세랑",
  },
  {
    img: "보건교사안은영_정세랑.jpg",
    quote: "“다치지 말고 경쾌하게 가란 말이야.”",
    author: "보건교사 안은영 - 정세랑",
  },
  {
    img: "여행의이유_김영하.jpg",
    quote:
      "메뉴를 고를 때 너무 고심하지 않는 편이다. 맛있으면 맛있어서 좋고 대실패를 하면 글로 쓰면 된다.",
    author: "여행의 이유 - 김영하",
  },
  {
    img: "여행의이유_김영하.jpg",
    quote:
      "우리는 어쩔 수 없이 ‘아무것도 아닌 자’가 되는 순간을 경험하게 된다.",
    author: "여행의 이유 - 김영하",
  },
  {
    img: "아무튼문구_김규림.jpg",
    quote: "나는 쓸데없는 것들의 힘을 믿는다.",
    author: "아무튼, 문구 - 김규림",
  },
  {
    img: "아무튼문구_김규림.jpg",
    quote:
      "자신이 생각하는 이상적인 삶을 살 수 있는 길은 가장 완벽한 하루를 상상해 보는 것에서 시작한다.",
    author: "아무튼, 문구 - 김규림",
  },
  {
    img: "어린이라는세계_김소영.jpg",
    quote:
      "“그것도 맞는데 지금도 묶을 수 있어요. 어른은 빨리 할 수 있고 어린이는 시간이 걸리는 것만 달라요.”",
    author: "어린이라는 세계 - 김소영",
  },
  {
    img: "어린이라는세계_김소영.jpg",
    quote:
      "어린이가 어른의 반만하다고 해서 어른의 반 만큼 존재하는 것은 아니다.",
    author: "어린이라는 세계 - 김소영",
  },
  {
    img: "23_hyukoh.jpg",
    quote: "풀린 신발 끈은 꽉 매야 해 혹시나 달리다가 밟아 넘어질 지 몰라",
    author: "가죽자켓 - 혁오",
  },
  {
    img: "nextepisode_akmu.jpg",
    quote: "나무와 꽃이 내 친구 중 전부라면 난 더 이상 상처받지 않을 거야",
    author: "BENCH (with Zion.T) - AKMU",
  },
];
const quote = document.querySelector(".quoteSet__quote");
const author = document.querySelector(".quoteSet__author");
const quoteImg = document.querySelector(".quoteSet__img");

// quote[int] int 순서인 값을 호출
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];
// 다른 string을 추가하지 않기 때문에 `${}` 필요 없음
quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
quoteImg.src = `img/${todaysQuotes.img}`;
