// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());
const body = document.querySelector("body");
const btnChangeColorEl = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");

const changeBgCRandom = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColorEl.textContent = randomColor;
};

btnChangeColorEl.addEventListener("click", changeBgCRandom);
