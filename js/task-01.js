const refs = {
  categoriesEl: document.querySelectorAll(".item"),
};
const categoryLength = refs.categoriesEl.length;

console.log(`Number of categories: ${categoryLength}`);

refs.categoriesEl.forEach((e) => {
  console.log(`Category: ${e.firstElementChild.textContent}`);
  console.log(`Elements: ${e.querySelectorAll("li").length}`);
});
