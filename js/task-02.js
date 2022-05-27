const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsListEl = document.querySelector("#ingredients");
const elements = [];
for (let i = 0; i < ingredients.length; i++) {
  const liIngridientEl = document.createElement("li");
  liIngridientEl.textContent = ingredients[i];
  liIngridientEl.classList.add("item");
  elements.push(liIngridientEl);
}
ingredientsListEl.append(...elements);
