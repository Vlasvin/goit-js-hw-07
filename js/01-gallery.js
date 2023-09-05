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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}
function onImageContainerClick(evt) {
  evt.preventDefault();
  let originalImg = evt.target.dataset.source;
  let currentLightbox = null;
  let isLightboxOpen = false;
  basicLightbox;
  currentLightbox = basicLightbox.create(
    `
		<img width="1400" height="900" src="${originalImg}">
	`
  );
  currentLightbox.show();
  isLightboxOpen = true;

  document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape' && isLightboxOpen) {
      currentLightbox.close();
      isLightboxOpen = false;
    }
  });
}
// На жаль не знайшов  це: Бібліотека basicLightbox містить метод для програмного закриття модального вікна. Тому зробив так
