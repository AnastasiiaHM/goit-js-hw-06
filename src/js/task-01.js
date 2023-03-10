// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3
// const ulEl = document.querySelector("#categories");
// const liItemEl = ulEl.children;
// console.log(`Numbers of categories ${liItemEl.length}`);
// for (const li of liItemEl) {
//   const titleEL = li.firstElementChild;
//   const chilUlEl = li.lastElementChild;
//   const chilLiEl = chilUlEl.children;
//   console.log(` Category: ${titleEL.textContent}`);
//   console.log(`Elemnts: ${chilLiEl.length}`);
// }

// 2 Створюємо input і span, при введенні тексту - змінюється span

const inputEl = document.querySelector(".input");
const textEl = document.querySelector(".text");

const handleInput = (event) => {
  if (event.target.value === "stop") {
    event.target.removeEventListener("input", handleInput);
    textEl.textContent = "Error junior";
    return;
  }
  textEl.textContent = event.target.value;
};

inputEl.addEventListener("input", handleInput);
