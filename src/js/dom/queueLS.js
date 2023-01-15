let queueAddBtn = document.querySelector('.add-queue-btn');
let queueBtn = document.querySelector('.queue-btn');
let key = 'moviesQueue';

queueAddBtn.addEventListener('click', onAddQueueClick);
// queueBtn.addEventListener('click', getQueue);

async function onAddQueueClick(event) {
  event.preventDefault();
  queueAddBtn.disabled = true;
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
