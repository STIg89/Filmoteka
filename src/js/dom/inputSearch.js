import { getMoviesSearch, getGenres } from '../api/fetchAPI';
import { renderGallery } from './renderMovies';
import { refs } from './refs';
import Notiflix from 'notiflix';

const { moviesOnInputList, inputEl } = refs;

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
  if (data.total_results === 0) {
    Notiflix.Notify.failure('There is no such film');
    return;
  } else {
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
}
