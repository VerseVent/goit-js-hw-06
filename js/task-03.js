const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryEl = document.querySelector(".gallery");

const itemsArr = [...images]
  .map(
    (e) =>
      `<li class = "gallery__item"><img class="" style = "display: block; border-radius: 10px; max-width: 400px; max-height:200px" class="gallery__img" src=${e.url} alt=${e.alt}/></li>`
  )
  .join(" ");
galleryEl.insertAdjacentHTML("beforeend", itemsArr);
