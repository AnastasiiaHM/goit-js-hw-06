// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

const liItemEl = document.querySelectorAll(".item");
console.log(`Numbers of categories ${liItemEl.length}`);

const titleEL = document.querySelectorAll("h2");
console.log(` Category: ${titleEL[0].textContent}`);

console.log(ulEl);
// const liEl = ulEl.children;
// console.log(liEl);
