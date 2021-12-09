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

    const modal = basicLightbox.create(` <div class="modal">
    // <img src= "${event.target.dataset.source}" class= "js-image-modal" width="800" height="600">
    //     </div>`, {
        onShow: (modal) =>{
            window.addEventListener('keydown', onKeyboardClick);
            // modal.element().querySelector('.js-image-modal').addEventListener("click", () => {
            //                 modal.close();
            //                 window.removeEventListener('keydown', onKeyboardClick);
            //             });
            console.log('onShow', modal)
        },
        onClose: (modal) => {
            window.removeEventListener('keydown', onKeyboardClick);
            console.log('onClose', modal)
        }
        
    })
    modal.show()
    function onKeyboardClick(event){
        if(event.code === 'Escape'){
            modal.close();
            window.removeEventListener('keydown', onKeyboardClick);
        };
    };
}

// const modal = basicLightbox.create(`
//     <div class="modal">
// <img src= "${event.target.dataset.source}" class= "js-image-modal" width="800" height="600">
//     </div>`
//     , {
//     onShow: (modal) => {
//         window.addEventListener('keydown', onKeyboardClick);

//         function onKeyboardClick(event){
//             if(event.code === 'Escape'){
//                 modal.close();
//                 window.removeEventListener('keydown', onKeyboardClick);
//             };
//         };
//         modal.element().querySelector('.js-image-modal').addEventListener("click", () => {
//             modal.close();
//             window.removeEventListener('keydown', onKeyboardClick);
//         });
//     },

// }).show();


// console.log(galleryMarkup);
// console.log(galleryItems);
// const instance = basicLightbox.create(html, {
//     onShow: (instance) => console.log('onShow', instance),
//     onClose: (instance) => console.log('onClose', instance)
// })

// instance.show((instance) => console.log('finished show()', instance))