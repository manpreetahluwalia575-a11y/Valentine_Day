const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const question = document.getElementById("question");
const subtext = document.getElementById("subtext");
const img = document.getElementById("img");

let noCount = 0;

const savageTexts = [
  "Nice try 😏",
  "Bubu, not happening 😂",
  "You sure? 😌",
  "Wrong button 😈",
  "Come on Bubu 💖",
  "JUST CLICK YES 😤",
  "I’ll wait 😎"
];

noBtn.addEventListener("mouseover", () => {
  noCount++;

  const x = Math.random() * 220 - 110;
  const y = Math.random() * 180 - 90;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  subtext.innerText = savageTexts[Math.min(noCount, savageTexts.length - 1)];
});

noBtn.addEventListener("click", () => {
  subtext.innerText = "HAHA you can’t 😜";
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "YAYYY 💖🥰";
  subtext.innerHTML = "Bubu said YES 😭✨";
  img.src = "https://media.tenor.com/k73jUnye04wAAAAM/dudu-bubu.gif";
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
});


