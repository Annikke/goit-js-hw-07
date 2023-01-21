import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (item) => `<a class="gallery__item" href=${item.original}>
    <img class="gallery__image" src=${item.preview} alt=${item.description}/>
    </a></div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", (eve) => {
  eve.preventDefault();
});

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: `alt`,
  captionDelay: 250,
});
