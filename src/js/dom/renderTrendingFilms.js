import { getTrendingFilms, getGenres } from '../api/fetchAPI';
import { renderGallery } from './renderMovies';
import { updateLastPaginationPage, pagination } from '../utils/pagination';
import { addToLS } from '../utils/functionsLS';

renderTrendingFilms();

export async function renderTrendingFilms() {
  const page = 1;
  const data = await getTrendingFilms(page);

  renderGallery(data.results);
  localStorage.setItem('searchedValue', '');
  pagination.reset(data.total_pages);
  updateLastPaginationPage(data);
}
