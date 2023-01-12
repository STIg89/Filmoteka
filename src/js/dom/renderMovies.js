import { refs } from './refs';
const { moviesOnInputList } = refs;

import { getGenres } from '../api/fetchAPI';

export function renderGallery(data) {
  const markupGallery = data
    .map(({ original_title, poster_path, id, genre_names, release_date }) => {
      return `<li class="movie__item" data-id="${id}">
                <div class="movie__img">
                <img src= "https://image.tmdb.org/t/p/original${poster_path}" alt="${original_title}" loading="lazy">
        </div>
                <div class="movie__description">
                  <p class="movie__title">${original_title}</p>
                  <div class="movie__meta">
                    <p class="movie__genres">${genre_names}| ${release_date}</p>                    
                  </div>
                </div>
            </li>`;
    })
    .join('');
  moviesOnInputList.insertAdjacentHTML('beforeend', markupGallery);
}
