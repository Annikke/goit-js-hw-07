import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const galleryMarkup = galleryItems
    .map(item => `<div class="gallery__item">
    <a class="gallery__link" href=${item.original}>
    <img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description}/>
    </a></div>`)
    .join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', (eve) => {
    eve.preventDefault();
    if (eve.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`<img src=${eve.target.dataset.source} width='800' height='600'/>`,
    { onShow: (instance) => {
           document.addEventListener('keydown', (eve) => {
                if (eve.code === "Escape") {
                    instance.close();
                    console.log("close");
                }
            });
    }
    });
        
    instance.show();
});

