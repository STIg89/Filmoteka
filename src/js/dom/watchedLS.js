const watchedAddBtn = document.querySelector('#add-watched-btn');
const watchedBtn = document.querySelector('#watched-btn');

const keyWatchedLS = 'arrayWatched';
//Перевіряємо є чи є в нас сховище з таким ключем і якщо немає створюємо
let arrayWatched = JSON.parse(localStorage.getItem(keyWatchedLS));
if (arrayWatched === null) {
  arrayWatched = [];
  localStorage.setItem(keyWatchedLS, JSON.stringify(arrayWatched));
}

watchedAddBtn.addEventListener('click', OnAddWatchedClick);

function OnAddWatchedClick(event) {
  event.preventDefault();
  //++ поки немає модалки фільму іd присвоюэтьсяв ручну
  let movieID = 5;
  //--

  indexID = arrayWatched.indexOf(movieID);

  if (indexID === -1) {
    arrayWatched.push(movieID);
    localStorage.setItem(keyWatchedLS, JSON.stringify(arrayWatched));
  } else {
    arrayWatched.splice(indexID, 1);

    localStorage.setItem(keyWatchedLS, JSON.stringify(arrayWatched));
  }
  checkStatusBTN(movieID);
}
///Перевіряє чи є такий фільм в local storage і якщо є то змінює кнопку на Remove
function checkStatusBTN(movieID) {
  if (arrayWatched.indexOf(movieID) === -1) {
    watchedAddBtn.textContent = 'Add to watched';
    watchedAddBtn.dataset.action = 'add';
    return;
  }
  watchedAddBtn.textContent = 'Remove to watched';
  watchedAddBtn.dataset.action = 'remove';
}
//checkStatusBTN(6);
