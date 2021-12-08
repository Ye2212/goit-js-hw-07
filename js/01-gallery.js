import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems
.map(({preview, original, description}) => `<div class = "gallery__item">
<a class="gallery__link" target = "_self" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
/>
</a></div>`).join('');

galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryRef.addEventListener('click', onGalleryClick);
 
function onGalleryClick (event){
    event.preventDefault();
    const isImage = event.target.classList.contains("gallery__image");
    if (!isImage) { 
        return;
     }


const modal = basicLightbox.create(`
    <div class="modal">
<img src= "${event.target.dataset.source}" width="800" height="600">
    </div>
`)

modal.show()
modal.close()

};

// console.log(galleryMarkup);

// console.log(galleryItems);
