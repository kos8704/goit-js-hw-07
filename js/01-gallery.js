import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');


galleryEl.innerHTML = createGalleryMarkup();
galleryEl.addEventListener('click', onGalleryItemClick);
let instance;

function createGalleryMarkup() {
  return galleryItems.map(({ preview, original, description }) => {
    return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
  })
  .join('');
}

function onGalleryItemClick(evt) {
  evt.preventDefault();
  const originalImgUrl = evt.target.dataset.source;
  
  if (!originalImgUrl) {
    return;
  }

  instance = basicLightbox.create(
    `
    <div class="modal">
      <img src="${originalImgUrl}"/>
    </div>
  `, 
    {
      onShow: () => {
        window.addEventListener('keydown', onEscKeyDown);
     },
      onClose: () => {
        window.removeEventListener('keydown', onEscKeyDown);
     }
    }
  );
  instance.show()
}


function onEscKeyDown(evt) {
  if (evt.key !== 'Escape') {
    return;
  }
  instance.close();
  }
  

// function showLightbox(origImgUrl) {
//   galleryInstance = basicLightbox.create(`<img src="${origImgUrl}">`, {
//   onShow: () => {
//     window.addEventListener('keydown', onEscKeyDown);
//   },
//   onClose: () => {
//     window.removeEventListener('keydown', onEscKeyDown);
//   }
// });
// galleryInstance.show();
// }









// instance.show(() => {
//   window.addEventListener('keydown', (evt) => {
//     if (evt.key !== "Escape") {
//       return;
//     }
//     instance.close();
//   })
// }) 
// }
