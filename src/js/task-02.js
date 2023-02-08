// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = [];

const ulEl = document.querySelector("#ingredients");
console.log(ulEl);

for (let ingredient of ingredients) {
  const liItemEl = document.createElement("li");
  liItemEl.classList.add("item");
  liItemEl.textContent = ingredient;
  elements.push(liItemEl);
}

ulEl.append(...elements);
console.log(ulEl);

// const listEl = document.querySelector(".list");

// const addElementsList = (array, listEl) => {
//   // const markup = array.reduce(
//   //   (acc, { first_name, last_name, email, phone }) =>
//   //     acc +
//   //     `
//   //   <li>
//   //   <p>${first_name} ${last_name}</p>
//   //   <p>${email}</p>
//   //   <p>${phone}</p>
//   //   </li>`,
//   //   ""
//   // );
//   const markup = array.map(
//     ({ first_name, last_name, email, phone }) =>
//       `
//     <li>
//     <p>${first_name} ${last_name}</p>
//     <p>${email}</p>
//     <p>${phone}</p>
//     </li>`
//   );
//   listEl.insertAdjacentHTML("beforeend", markup.join(""));
// };

// addElementsList(users, listEl);
