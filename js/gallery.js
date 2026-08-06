const images = [
  {
    preview: 'https://pixabay.com',
    original: 'https://pixabay.com',
    description: 'Hokkaido Flower',
  },
  {
    preview: 'https://pixabay.com',
    original: 'https://pixabay.com',
    description: 'Container Haulage Freight',
  },
  {
    preview: 'https://pixabay.com',
    original: 'https://pixabay.com',
    description: 'Mountain Lake Sailing',
  },
  {
    preview: 'https://pixabay.com',
    original: 'https://pixabay.com',
    description: 'Alpine Spring Meadows',
  },
  {
    preview: 'https://pixabay.com',
    original: 'https://pixabay.com',
    description: 'Nature Landscape',
  },
  {
    preview: 'https://pixabay.com',
    original: 'https://pixabay.com',
    description: 'Lighthouse Coast Sea',
  },
  {
    preview: 'https://pixabay.com',
    original: 'https://pixabay.com',
    description: 'Aerial Beach View',
  },
  {
    preview: 'https://pixabay.com',
    original: 'https://pixabay.com',
    description: 'Flower Blooms',
  },
  {
    preview: 'https://pixabay.com',
    original: 'https://pixabay.com',
    description: 'Alpine Mountains',
  },
];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          referrerpolicy="no-referrer" 
        />
      </a>
    </li>
  `
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const isImageEl = event.target.classList.contains('gallery-image');
  if (!isImageEl) return;

  const largeImageUrl = event.target.dataset.source;
  console.log(largeImageUrl);

  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="1112" height="640">
  `, {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    }
  });

  instance.show();

  function onEscKeyPress(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}
