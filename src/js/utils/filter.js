import { updateLastPaginationPage, pagination } from '../utils/pagination';
import { renderGallery } from '../dom/renderMovies';
import { refs } from '../dom/refs';
import Notiflix from 'notiflix';

const API_KEY = 'api_key=e57746b2e4fe98cb5cc839cb405a15f1';
const BASE_URL = 'https://api.themoviedb.org/3';
const GENRE_URL =
  BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

refs.filterOpenBtn.addEventListener('click', onFilterOpen);
refs.filterReset.addEventListener('click', onFilterReset);
const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

function onFilterOpen(e) {
  refs.filterOpenBtn.classList.toggle('filter--active');
  refs.filterBtn.classList.toggle('filter--active--color');
  refs.tagsEl.classList.toggle('visually-hidden');
  refs.inputEl.classList.toggle('is-hidden');
  refs.filterReset.classList.toggle('is-hidden');
  setGenre();
  showSelectedGenre();
}
function onFilterReset(e) {
  location.reload();
}
let selectedGenre = [];

function setGenre() {
  refs.tagsEl.innerHTML = '';
  genres.forEach(genre => {
    const t = document.createElement('div');
    t.classList.add('tag');
    t.id = genre.id;
    t.innerText = genre.name;
    t.addEventListener('click', () => {
      if (selectedGenre.length === 0) {
        selectedGenre.push(genre.id);
      } else if (selectedGenre.includes(genre.id)) {
        selectedGenre.forEach((id, idx) => {
          if (id === genre.id) {
            selectedGenre.splice(idx, 1);
          }
        });
      } else {
        selectedGenre.push(genre.id);
      }

      refs.moviesOnInputList.innerHTML = '';
      getMoviesByGenre(
        GENRE_URL + '&with_genres=' + encodeURI(selectedGenre.join(','))
      ),
        showSelectedGenre();
    });
    refs.tagsEl.append(t);
  });
}

function showSelectedGenre() {
  const tagEl = document.querySelectorAll('.tag');
  tagEl.forEach(tag => {
    tag.classList.remove('highlight');
  });
  if (selectedGenre.length !== 0) {
    selectedGenre.forEach(id => {
      const highlightedTag = document.getElementById(id);
      highlightedTag.classList.add('highlight');
    });
  }
}

function getMoviesByGenre(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      refs.moviesOnInputList.innerHTML = '';
      if (data.total_results === 0) {
        Notiflix.Notify.failure('There is no such film');
        return;
      } else {
        renderGallery(data.results);
        updateLastPaginationPage(data);
        pagination.reset(data.total_pages);
        updateLastPaginationPage(data);
      }
    });
}
