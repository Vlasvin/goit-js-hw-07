import { galleryItems } from './gallery-items.js';

const imgContainer = document.querySelector('.gallery');
const cardMarkup = createImgCard({ galleryItems });

imgContainer.insertAdjacentHTML('beforeend', cardMarkup);
imgContainer.addEventListener('click', onImageContainerClick);

function createImgCard({ galleryItems }) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');
}
function onImageContainerClick(evt) {
  evt.preventDefault();
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}