import './css/styles.css';
import PixabayApi from './js/pixabay-api';
import { onRenderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const refs = {
  searchform: document.querySelector('.form'),
  galleryContainer: document.querySelector('.gallery'),
  loader: document.createElement('div'),
};

refs.loader.className = 'loader';
document.body.appendChild(refs.loader);

const pixabayApi = new PixabayApi();

refs.searchform.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const query = event.currentTarget.elements.query.value.trim();
  if (!query) {
    return showToast('red', 'Please, fill the main field', 'topRight'); // Якщо запит порожній, з'являється повідомлення про необхідність заповнити поле, і функція завершується.
  }

  showLoader();
  refs.galleryContainer.innerHTML = '';
  pixabayApi.query = query;

  pixabayApi
    .fetchPhoto()
    .then(data => {
      if (data.hits.length === 0) {
        showToast(
          'red',
          'Sorry, there are no images matching your search query. Please try again!',
          'topRight'
        );
      } else {
        onRenderGallery(data.hits, refs.galleryContainer);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      showToast(
        'red',
        'An error occurred while fetching images. Please try again later.',
        'topRight'
      );
    })
    .finally(() => {
      hideLoader();
      refs.searchform.reset();
    });

  pixabayApi.reset();
}

function showToast(color, message) {
  iziToast.show({
    color: color,
    message: message,
    position: 'topRight',
  });
}

function showLoader() {
  refs.loader.style.display = 'block';
}

function hideLoader() {
  refs.loader.style.display = 'none';
}