import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../api/firebase-config.js';
import { getAuth, signOut } from 'firebase/auth';
import { showSuccessModal } from './showSuccess.js';
import { refs } from './refs.js';

refs.headerSignoutBtn.addEventListener('click', () => {
  userState();
});
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const userState = user => {
  auth.onAuthStateChanged(user => {
    console.log(user);
    if (!localStorage.getItem('uid')) {
      refs.headerSignoutBtn.addEventListener('click', userState);
      const uid = user.uid;
      localStorage.setItem('uid', uid);
      localStorage.setItem('username', user.email);
      refs.headerUserEmailDiv.innerHTML = `Hello, </br> ${localStorage.getItem(
        'username'
      )}`;
      refs.loginModal.classList.toggle('is-hidden');
      showSuccessModal(user.email);
      return;
    } else {
      refs.headerSignoutBtn.removeEventListener('click', userState);
      localStorage.removeItem('uid');
      localStorage.removeItem('username');
      refs.signoutModal.classList.toggle('is-hidden');
      refs.headerUserLogedinContainer.classList.add('visually-hidden');
      refs.headerUserNoLoginContainer.classList.remove('visually-hidden');
      // should be attached to button sign out in header
    }
  });
};
