import { refs } from './refs.js';
if (localStorage.getItem('uid') && localStorage.getItem('username')) {
  if (refs.headerUserLogedinContainer.classList.contains('visually-hidden')) {
    refs.headerUserLogedinContainer.classList.remove('visually-hidden');
    refs.headerUserEmailDiv.innerHTML = `${localStorage.getItem('username')}`;
  } else return;
} else {
  // no id in localstorage
  if (refs.headerUserNoLoginContainer.classList.contains('visually-hidden')) {
    refs.headerUserNoLoginContainer.classList.remove('visually-hidden');
  } else return;
}
