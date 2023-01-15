import {refs} from './refs';
let key = 'moviesQueue';


function addListenerQueueAddBtn() {
  let queueAddBtn = document.querySelector('.add-queue-btn');
  queueAddBtn.addEventListener('click', onAddQueueClick);
}

function addListenerQueueBtn() {
  queueBtn.addEventListener('click', onAddQueueClick);
}

async function onAddQueueClick(event) {
  event.preventDefault();
  event.currentTarget.disabled = true;

  let movieID = Number(refs.modalMovieContent.getAttribute('data-id'));

   await addToQueue(movieID);
}

async function addToQueue(movieId) {
 
  let array = await getQueue();
 
  if (!array.includes(movieId)) {
    array.push(movieId);
    localStorage.setItem(key, JSON.stringify(array));
  }
}

async function getQueue() { 
  let movieArray = localStorage.getItem(key);
  let parsedMovieArray = JSON.parse(movieArray);
  return Array.isArray(parsedMovieArray) ? parsedMovieArray : [];
}

export {addListenerQueueAddBtn, addListenerQueueBtn};
