import { getMoviesSearch, getGenres } from '../api/fetchAPI';
import { renderGallery } from './renderMovies';
import { refs } from './refs';
import Notiflix from 'notiflix';
import { addToLS } from '../utils/functionsLS';
import { updateLastPaginationPage, pagination } from '../utils/pagination';

const { moviesOnInputList, inputEl } = refs;

inputEl.addEventListener('submit', searchHendler);

async function searchHendler(e) {
  e.preventDefault();
  const query = e.currentTarget.elements.searchQuery.value;
  if (query === ' ' || query === '') {
    Notiflix.Notify.failure('Please type search and try again.');
    return;
  }
  addToLS('searchedValue', query);

  const data = await getMoviesSearch(query);
  moviesOnInputList.innerHTML = '';
  if (data.total_results === 0) {
    Notiflix.Notify.failure('There is no such film');
    return;
  } else {
    renderGallery(data.results);
    updateLastPaginationPage(data);
    pagination.reset(data.total_pages);
    updateLastPaginationPage(data);
  }
}
