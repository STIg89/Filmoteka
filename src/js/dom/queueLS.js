import { refs } from './refs';
import { getMovieDetails } from '../api/fetchAPI';
import { renderLibraryGallery } from '../dom/renderMovies';
import { checkForLoginState } from './checkForLoginState-lib';

let key = 'moviesQueue';

function addListenerQueueAddBtn() {
  let queueAddBtn = document.querySelector('.add-queue-btn');
  queueAddBtn.addEventListener('click', onAddQueueClick);
}

function addListenerQueueBtn() {
  let queueBtn = document.querySelector('.queue-btn');

  if (queueBtn) {
    queueBtn.addEventListener('click', onQueueBtnClick);
  }
}

addListenerQueueBtn();

async function onAddQueueClick(event) {
  // event.preventDefault();
  if (localStorage.getItem('uid') && localStorage.getItem('username')) {
    let movieId = Number(refs.modalMovieContent.getAttribute('data-id'));

    await addToQueue(movieId);
    await checkQueueBtn(movieId);
  } else {
    checkForLoginState();
  }
}

async function addToQueue(movieId) {
  let movieDetails = await getMovieDetails(movieId);

  let genre_names = movieDetails.genres.map(x => (x = x.name));
  if (genre_names.length > 3) {
    genre_names.splice(2, genre_names.length - 1, 'Other');
  }
  genre_names = genre_names.join(', ');

  let release_date = movieDetails.release_date.slice(0, 4);

  let movieObject = {
    id: movieDetails.id,
    backdrop_path: movieDetails.backdrop_path,
    genre_names: genre_names,
    poster_path: movieDetails.poster_path,
    release_date: release_date,
    original_title: movieDetails.original_title,
    vote_average: movieDetails.vote_average,
  };

  let array = await getQueue();

  let indexID = array.findIndex(x => x.id === movieId);

  if (indexID < 0) {
    array.push(movieObject);
    localStorage.setItem(key, JSON.stringify(array));
  } else {
    array.splice(indexID, 1);
    localStorage.setItem(key, JSON.stringify(array));
  }
}

async function getQueue() {
  let movieArray = localStorage.getItem(key);
  let parsedMovieArray = JSON.parse(movieArray);
  return Array.isArray(parsedMovieArray) ? parsedMovieArray : [];
}

async function onQueueBtnClick(event) {
  let watchedBtn = document.querySelector('.library__button--watched');
  if (localStorage.getItem('uid') && localStorage.getItem('username')) {
    event.currentTarget.classList.add('activeLS');
    watchedBtn.classList.remove('activeLS');
    await renderQueue();
  } else {
    checkForLoginState();
  }
}

async function renderQueue() {
  let queueBtn = document.querySelector('.queue-btn');

  if (queueBtn && queueBtn.classList.contains('activeLS')) {
    refs.moviesOnInputList.innerHTML = '';
    let array = await getQueue();

    renderLibraryGallery(array);
  }
}

async function checkQueueBtn(movieId) {
  let array = await getQueue();

  let indexID = array.findIndex(x => x.id === movieId);
  let queueAddBtn = document.querySelector('.add-queue-btn');
  if (localStorage.getItem('uid') && localStorage.getItem('username')) {
    if (indexID < 0) {
      queueAddBtn.textContent = 'Add to queue';
      return;
    }
    queueAddBtn.textContent = 'Remove from queue';
  } else {
    queueAddBtn.textContent = 'Add to queue';
  }
}

export {
  addListenerQueueAddBtn,
  addListenerQueueBtn,
  checkQueueBtn,
  renderQueue,
};
