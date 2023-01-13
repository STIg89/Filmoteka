import { getDataApi } from '../api/getDataApi';
import card from './templates/card.hbs';
import Pagination from 'tui-pagination';
const containerPag = document.getElementById('tui-pagination-container');
const tuiCont = document.querySelector('.tui-pagination');
const filmList = document.querySelector('.film-list');
let URL = '';
let page = 1;
const URL_TO_WEEK = `https://api.themoviedb.org/3/trending/movie/week?api_key=7bfeb33324f72574136d1cd14ae769b5&page=`;
URL = URL_TO_WEEK;
const genres = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

let allResults = null;

function mainPage(URL, page) {
  getDataApi(URL + page).then(response => buildElements(response));
}

function buildElements(response) {
  allResults = response.total_results;
  if (allResults < 21) {
    instance.reset();
    tuiCont.classList.add('visually-hidden');
  } else {
    instance.setTotalItems(allResults);
    tuiCont.classList.remove('visually-hidden');
  }

  response.results.map(item => {
    function auditGanres() {
      if (item.genre_ids.length < 3) {
        return item.genre_ids.map(elem => genres[elem]).join(', ');
      }
      return (
        item.genre_ids
          .map(elem => genres[elem])
          .slice(0, 2)
          .join(', ') + ', others'
      );
    }

    function auditYear() {
      if (!item.release_date) {
        return 'unknown year';
      } else return item.release_date.slice(0, 4);
    }
    function srcAudit() {
      if (!item.poster_path) {
        return `https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg`;
      }
      return `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    }
    const genr = auditGanres();
    const vote = item.vote_average.toFixed(1);
    const name = item.title.toUpperCase();
    const year = auditYear();
    const src = srcAudit();
    const id = item.id;

    const data = { name, year, genr, vote, src, id };

    filmList.insertAdjacentHTML('beforeend', card(data));
  });
}
const instance = new Pagination(containerPag, {
  totalItems: 120,
  itemsPerPage: 20,
  visiblePages: 5,
});
tuiCont.addEventListener('click', onTuiContClick);
function onTuiContClick() {
  page = instance.getCurrentPage();
  filmList.innerHTML = '';

  mainPage(URL, page);
}
