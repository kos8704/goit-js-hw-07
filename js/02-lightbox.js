import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = createGalleryMarkup();

function createGalleryMarkup() {
    return galleryItems.map(({ preview , original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    }).join('');
}

new SimpleLightbox('.gallery a');