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

const ulEl = document.querySelector("#ingredients");
console.log(ulEl);

const liItemEl = document.createElement("li");
liItemEl.classList.add("item");
liItemEl.textContent = ingredients[0];

const liItemEl2 = document.createElement("li");
liItemEl2.classList.add("item");
liItemEl2.textContent = ingredients[1];

const liItemEl3 = document.createElement("li");
liItemEl3.classList.add("item");
liItemEl3.textContent = ingredients[2];

const liItemEl4 = document.createElement("li");
liItemEl4.classList.add("item");
liItemEl4.textContent = ingredients[3];

ulEl.append(liItemEl, liItemEl2, liItemEl3, liItemEl4);
console.log(ulEl);
