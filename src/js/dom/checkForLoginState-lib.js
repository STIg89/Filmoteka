import { refs } from './refs.js';
import {
  onCloseLogInModal,
  onBackdropLogInClick,
  onEscKeyPressLogInModal,
  invokeResponseSet,
} from './modalLogIn.js';

export function checkForLoginState() {
  if (localStorage.getItem('uid') && localStorage.getItem('username')) {
    if (refs.headerUserLogedinContainer.classList.contains('visually-hidden')) {
      refs.headerUserLogedinContainer.classList.remove('visually-hidden');
      refs.headerUserEmailDiv.innerHTML = `${localStorage.getItem('username')}`;
    } else return;
  } else {
    // no id in localstorage
    refs.loginModal.classList.toggle('is-hidden');
    refs.loginModalCloseBtn.addEventListener('click', onCloseLogInModal);
    refs.loginModal.addEventListener('click', onBackdropLogInClick);
    window.addEventListener('keydown', onEscKeyPressLogInModal);
    refs.loginForm.addEventListener('submit', invokeResponseSet);
    refs.body.classList.add('no-scroll');
    if (refs.headerUserNoLoginContainer.classList.contains('visually-hidden')) {
      refs.headerUserNoLoginContainer.classList.remove('visually-hidden');
    } else return;
  }
}
