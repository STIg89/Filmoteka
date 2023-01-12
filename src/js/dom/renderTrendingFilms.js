import { getTrendingFilms, getGenres } from '../api/fetchAPI';
import { renderGallery } from './renderMovies';

renderTrendingFilms();

async function renderTrendingFilms() {
  const data = await getTrendingFilms();

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
}
