import { getTrendingFilms, getGenres } from '../api/fetchAPI';
import { renderGallery } from './renderMovies';
import { updateLastPaginationPage, pagination } from '../utils/pagination';
import { addToLS } from '../utils/funtionsLS';

renderTrendingFilms();

async function renderTrendingFilms() {
  const page = 1;
  const data = await getTrendingFilms(page);

  const genre = await getGenres().then(({ genres }) => {
    if (data.results) {
      data.results.forEach(movie => {
        const { genre_ids, release_date } = movie;
        genres.forEach(({ name, id }) => {
          if (genre_ids.includes(id)) {
            if (genre_ids.length > 2) {
              genre_ids.splice(2, genre_ids.length - 1, 'Other');
            }
            genre_ids.splice(genre_ids.indexOf(id), 1, name);
          }
          movie.genre_names = genre_ids.join(', ');
          if (movie.release_date) {
            movie.release_date = release_date.slice(0, 4);
          }
        });
      });
    }
  });

  renderGallery(data.results);
  localStorage.setItem('searchedValue', '');
  pagination.reset(data.total_pages);
  updateLastPaginationPage(data);
}
