const colors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "blanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNum = getRandNum();

  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
});

function getRandNum() {
  return Math.floor(Math.random() * colors.length);
}
