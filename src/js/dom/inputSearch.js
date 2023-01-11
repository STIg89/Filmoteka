import { getMoviesSearch } from '../api/fetchAPI';
import { renderGallery } from './renderMovies';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('.input');
const moviesOnInputList = document.querySelector('.list-gallery');

inputEl.addEventListener('submit', searchHendler);

async function searchHendler(e) {
  e.preventDefault();
  const query = e.currentTarget.elements.searchQuery.value;
  if (query === ' ' || query === '') {
    Notiflix.Notify.failure('Please type search and try again.');
    return;
  }
  const data = await getMoviesSearch(query);
  moviesOnInputList.innerHTML = '';
  renderGallery(data.results);
}
