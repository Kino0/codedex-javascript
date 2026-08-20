const stone = document.getElementById("stone");

const colors = ["red", "orange", "yellow", "green", "blue", "#4169e1", "#00008b", "purple", "black"];

stone.addEventListener('click', () => {
  
  const randomNumber = Math.floor(Math.random() * colors.length);

  stone.style.backgroundColor = colors[randomNumber];

});