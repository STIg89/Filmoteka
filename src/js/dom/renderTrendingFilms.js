import { getTrendingFilms } from '../api/fetchAPI';
import { renderGallery } from './renderMovies';

renderTrendingFilms();

async function renderTrendingFilms() {
  const data = await getTrendingFilms;
  renderGallery(data.results);
}
