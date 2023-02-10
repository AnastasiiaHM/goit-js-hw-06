// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValueEl = document.querySelector("#controls input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const ctnBoxEl = document.querySelector("#boxes");

console.log();
function createBoxes(amount) {
  let newBoxesEl = "";
  const firstBoxSize = 30;
  ctnBoxEl.innerHTML = "";
  for (let i = 0; i < amount; i += 1) {
    newBoxesEl += `<div class="box" style="width: ${
      firstBoxSize + 10 * i
    }px; height: ${
      firstBoxSize + 10 * i
    }px; background-color: ${getRandomHexColor()};"></div>`;
  }
  ctnBoxEl.insertAdjacentHTML("beforeend", newBoxesEl);
  // amount = "";
}

const destroyBoxes = () => {
  ctnBoxEl.innerHTML = "";
  // amount = "";
};
btnCreateEl.addEventListener("click", () => {
  let amount = inputValueEl.value;
  createBoxes(amount);
});
btnDestroyEl.addEventListener("click", destroyBoxes);
