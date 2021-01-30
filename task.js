import gallery from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.lightbox');
const lightboxOverlayRef = document.querySelector('.lightbox__overlay');
const lightboxImageRef = document.querySelector('.lightbox__image');
const closeBtnRef = document.querySelector(
  'button[data-action="close-lightbox"]',
);

galleryRef.addEventListener('click', addSrcLightbox);
closeBtnRef.addEventListener('click', clearSrcLightbox);
galleryRef.addEventListener('click', doActiveLightbox);
lightboxOverlayRef.addEventListener('click', doOverlayClickClose);
document.addEventListener('keydown', doEscClose);

gallery.forEach(image => {
  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<li class="gallery__item">
    <a
    class="gallery__link"
    href="${image.original}">
     <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
        />
        </a>
        </li>`,
  );
});

function addSrcLightbox(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  const elem = event.target.dataset.source;
  lightboxImageRef.src = elem;
}
function clearSrcLightbox() {
  lightboxRef.classList.remove('is-open');
  lightboxImageRef.src = '';
}
function doActiveLightbox(event) {
  if (event.target !== event.currentTarget) {
    lightboxRef.classList.add('is-open');
  }
  return;
}
function doOverlayClickClose() {
  if (lightboxRef.classList.contains('is-open')) {
    lightboxRef.classList.remove('is-open');
    lightboxImageRef.src = '';
  }
  return;
}
function doEscClose(event) {
  if (event.keyCode == 27) {
    lightboxRef.classList.remove('is-open');
    lightboxImageRef.src = '';
  }
  return;
}
