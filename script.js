const btn = document.querySelector(".btn");
const colorBox = document.querySelector(".color-box");
const colorCode = document.querySelector(".color-code");

const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

colorCode.textContent = "";

btn.addEventListener("click", () => {
  colorCode.textContent = randColor();
  colorBox.style.backgroundColor = randColor();
  colorBox.style.backgroundImage = `linear-gradient(120deg, ${randColor()}, ${randColor()})`;
});
