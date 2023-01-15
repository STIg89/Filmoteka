import { getMovieDetails } from '../api/fetchAPI';
import { renderGallery } from '../dom/renderMovies';
import { refs } from './refs';

const watchedBtn = document.querySelector('#watched-btn');

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
  // let arrayWatched = JSON.parse(localStorage.getItem(keyWatchedLS));
  //++ поки немає модалки фільму іd присвоюється вручну
  // let movieID = 299536;
  // let movieID = 383498;
  // let movieID = 500664;
  let movieID = Number(refs.modalMovieContent.getAttribute('data-id'));
  //--

  indexID = arrayWatched.findIndex(x => x.id === movieID);
  console.log(movieID);
  console.log(indexID);
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
  indexID = arrayWatched.findIndex(x => x.id === movieID);
  if (indexID < 0) {
    refs.watchedAddBtn.textContent = 'Add to watched';
    refs.watchedAddBtn.dataset.action = 'add';
    return;
  }
  refs.watchedAddBtn.textContent = 'Remove to watched';
  refs.watchedAddBtn.dataset.action = 'remove';
}

function addListenerWatched() {
  refs.watchedBtn.addEventListener('click', onClickWatched);
}

function onClickWatched(event) {
  renderWatched();
}
// ренедрить фільми з сховища
function renderWatched() {
  refs.moviesOnInputList.innerHTML = '';
  renderGallery(arrayWatched);
}

export {
  // додає слухача події на кнопку add watched на модалці
  addListenerAddWatched,
  // додає слухача події на кнопку  watched на хедері
  addListenerWatched,
  // ренедрить фільми з сховища
  renderWatched,
  // переіряє чи фільм в сховищі і змінює текст кнопки
  checkStatusBTN,
};
