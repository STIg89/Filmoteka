import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../api/firebase-config.js';
import { getAuth, signOut } from 'firebase/auth';
import { showSuccessModal } from './showSuccess.js';
import { refs } from './refs.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const userState = user => {
  auth.onAuthStateChanged(user => {
    if (!localStorage.getItem('uid')) {
      refs.headerSignoutBtn.addEventListener('click', userState);
      const uid = user.uid;
      localStorage.setItem('uid', uid);
      localStorage.setItem('username', user.email);
      refs.headerUserEmailDiv.innerHTML = `${localStorage.getItem('username')}`;
      refs.loginModal.classList.toggle('is-hidden');
      showSuccessModal(user.email);
      return;
    } else {
      refs.headerSignoutBtn.removeEventListener('click', userState);
      localStorage.removeItem('uid');
      localStorage.removeItem('username');
      refs.signoutModal.classList.toggle('is-hidden');
      refs.body.classList.add('no-scroll');
      refs.closeModalBtnSignOut.addEventListener('click', onCloseModalSignOut);
      refs.signoutModal.addEventListener('click', onBackdropClickSignOut);
      window.addEventListener('keydown', onEscKeyPressSignOut);
      refs.headerUserLogedinContainer.classList.add('visually-hidden');
      refs.headerUserNoLoginContainer.classList.remove('visually-hidden');
      // should be attached to button sign out in header
      location.reload();
    }
  });
};
refs.headerSignoutBtn.addEventListener('click', userState);

function onCloseModalSignOut() {
  refs.signoutModal.classList.toggle('is-hidden');
  window.removeEventListener('keydown', onEscKeyPressSignOut);
  refs.body.classList.remove('no-scroll');
}

function onBackdropClickSignOut(e) {
  if (e.currentTarget === e.target) {
    onCloseModalSignOut();
  }
}

function onEscKeyPressSignOut(e) {
  if (e.code === 'Escape') {
    onCloseModalSignOut();
  }
}
