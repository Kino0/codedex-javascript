const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
  "Omfg!",
  "No way!",
  "That's awesome!",
  "Not at all!"
];

const img = document.getElementById("random-meme");
const caption = document.getElementById("random-caption");
const button = document.getElementById("generator-button");

button.addEventListener("click", () => {
  let randomMeme = Math.floor(Math.random() * memeArray.length);
  let randomCaption = Math.floor(Math.random() * captionsArray.length);

  img.src = memeArray[randomMeme];
  caption.textContent = captionsArray[randomCaption];
  
});