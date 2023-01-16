import { getMovieDetails } from '../api/fetchAPI';
import { renderGallery } from '../dom/renderMovies';
import { refs } from './refs';

const keyWatchedLS = 'arrayWatched';
//Перевіряємо є чи є в нас сховище з таким ключем і якщо немає створюємо
let arrayWatched = JSON.parse(localStorage.getItem(keyWatchedLS));
if (arrayWatched === null) {
  arrayWatched = [];
  localStorage.setItem(keyWatchedLS, JSON.stringify(arrayWatched));
}
function addListenerAddWatched() {
  refs.watchedAddBtn = document.querySelector('#add-watched-btn');
  refs.watchedAddBtn.addEventListener('click', OnAddWatchedClick);
}

async function OnAddWatchedClick(event) {
  event.preventDefault();

  let movieID = Number(refs.modalMovieContent.getAttribute('data-id'));
  //--

  let indexID = arrayWatched.findIndex(x => x.id === movieID);

  if (indexID < 0) {
    const movieDetails = await getMovieDetails(movieID);

    //Вибираємо з масиву обєктів тільки імена жанрів
    genre_names = movieDetails.genres.map(x => (x = x.name));
    // якщо жанрів більше ніж обрізаємо їх залишаючи лише три замінючи третій словом Other
    if (genre_names.length > 3) {
      genre_names.splice(2, genre_names.length - 1, 'Other');
    }
    genre_names = genre_names.join(', ');
    //З дати беремо лише рік
    if (movieDetails.release_date) {
      release_date = movieDetails.release_date.slice(0, 4);
    }
    
    let movieOb = {
      id: movieDetails.id,
      backdrop_path: movieDetails.backdrop_path,
      genre_names: genre_names,
      poster_path: movieDetails.poster_path,
      release_date: release_date,
      original_title: movieDetails.original_title,
      vote_average: movieDetails.vote_average,
    };

    arrayWatched.push(movieOb);
    localStorage.setItem(keyWatchedLS, JSON.stringify(arrayWatched));
  } else {
    arrayWatched.splice(indexID, 1);

    localStorage.setItem(keyWatchedLS, JSON.stringify(arrayWatched));
  }
  checkStatusBTN(movieID);
}
///Перевіряє чи є такий фільм в local storage і якщо є то змінює кнопку на Remove
function checkStatusBTN(movieID) {
  // let arrayWatched = JSON.parse(localStorage.getItem(keyWatchedLS));
  let indexID = arrayWatched.findIndex(x => x.id === movieID);
  if (indexID < 0) {
    refs.watchedAddBtn.textContent = 'Add to watched';
    refs.watchedAddBtn.dataset.action = 'add';
    return;
  }
  refs.watchedAddBtn.textContent = 'Remove from watched';
  refs.watchedAddBtn.dataset.action = 'remove';
}

/// watched
refs.watchedGallery = false;

const watchedBtn = document.querySelector('.library__button--watched');
if (watchedBtn !== null) {
  watchedBtn.addEventListener('click', onClickWatched);
  /// для того щоб фільми з watched  рендерились автоматично
  refs.watchedGallery = true;
  renderWatched();
}

function onClickWatched(event) {
  refs.watchedGallery = true;
  renderWatched();
}
// ренедрить фільми з сховища
function renderWatched() {
  if (refs.watchedGallery) {
    refs.moviesOnInputList.innerHTML = '';
    renderGallery(arrayWatched);
  }
}

export {
  // додає слухача події на кнопку add watched на модалці
  addListenerAddWatched,
  // ренедрить фільми з сховища
  renderWatched,
  // переіряє чи фільм в сховищі і змінює текст кнопки
  checkStatusBTN,
};
