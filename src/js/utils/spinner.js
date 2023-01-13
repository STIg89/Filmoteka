import { refs } from '../dom/refs';

const { pagePreloader } = refs;

function showSpinner() {
  pagePreloader.classList.remove('hide');
}
function hideSpinner() {
  pagePreloader.classList.add('hide');
}

export { showSpinner, hideSpinner };

window.addEventListener('load', () => {
  setTimeout(() => {
    pagePreloader.classList.add('hide');
  }, 1000);
});