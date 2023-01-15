import { getMoviesSearch, getGenres } from '../api/fetchAPI';
import { renderGallery } from './renderMovies';
import { refs } from './refs';
import Notiflix from 'notiflix';
import { getMovieDetails } from '../api/fetchAPI';

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

    setTimeout(() => {
      const movieItems = document.querySelectorAll('.movie__item');

      console.log(movieItems);

      movieItems.forEach(movie => {
        movie.addEventListener('click', e => {
          e.preventDefault();

          const id = movie.getAttribute('data-id');

          getMovieDetails(id).then(data => {
            console.log(data);
            const backdrop = document.querySelector('.backdrop');
            backdrop.classList.remove('is-hidden');

            document.querySelector('.modal-movie__content').innerHTML = `
        <div class="movie-detail">
          <div class="movie-detail__image">
            <img src="https://image.tmdb.org/t/p/original/${data.poster_path}" alt="" class="movie-detail__img">
          </div>
          <div class="movie-detail__content">
            <h2 class="movie-detail__title">${data.title}</h2>
            <ul class="movie-detail__list">
              <li class="movie-detail__item">
                <h4 class="movie-detail__heading">Vote / Votes</h4>
                <p class="movie-detail__value"><span>${data.vote_average}</span> / ${data.vote_count}</p>
              </li>
              <li class="movie-detail__item">
                <h4 class="movie-detail__heading">Popularity</h4>
                <p class="movie-detail__value">${data.popularity}</p>
              </li>
              <li class="movie-detail__item">
                <h4 class="movie-detail__heading">Original Title</h4>
                <p class="movie-detail__value">${data.original_title}</p>
              </li>
              <li class="movie-detail__item">
                <h4 class="movie-detail__heading">Genre</h4>
                <p class="movie-detail__value">Western </p>
              </li>
            </ul>
            <h5 class="movie-detail__subtitle">About</h5>
            <p class="movie-detail__text">${data.overview}</p>
            <div class="movie-detail__btns">
              <button class="movie-detail__btn-main">add to Watched</button>
              <button class="movie-detail__btn-secondary">add to queue</button>
              <button class="movie-detail__btn-main">trailer</button>
            </div>
          </div>
        </div>
        `;
          });
        });
      });
      document.querySelector('.backdrop').addEventListener('click', e => {
        if (
          e.target.classList.contains('button-modal-movie--close') ||
          e.target.classList.contains('backdrop')
        ) {
          document.querySelector('.backdrop').classList.add('is-hidden');
        }
      });
    }, 1000);
  }
}
