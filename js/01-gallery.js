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
  let isLightboxOpen = true;
  basicLightbox;

  if (evt.target.nodeName !== 'IMG') return;
  const instance = basicLightbox.create(
    `
		<img width="1400" height="900" src="${originalImg}">
	`,
    {
      onShow: instance => {
        window.addEventListener('keydown', closeByEscape);
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeByEscape);
      },
    }
  );
  instance.show();

  function closeByEscape(event) {
    if (event.code === 'Escape' && isLightboxOpen) {
      instance.close();
      isLightboxOpen = false;
    }
  }
}
