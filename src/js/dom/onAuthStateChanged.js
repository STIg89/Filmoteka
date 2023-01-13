import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../api/firebase-config.js';
import { getAuth, signOut } from 'firebase/auth';
import { showSuccessModal } from './showSuccess.js';
import { refs } from './refs.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const userState = user => {
  auth.onAuthStateChanged(user => {
    if (!user) {
      console.log('Signed out');
      signOut(auth)
        .then(() => {
          window.localStorage.removeItem('uid', uid);
          refs.signoutModal.classList.toggle('is-hidden');
          // should be attached to button sign out in header
        })
        .catch(error => {
          // An error happened.
        });
    } else {
      const uid = user.uid;
      window.localStorage.setItem('uid', uid);
      refs.loginModal.classList.toggle('is-hidden');
      const delay = setTimeout(showSuccessModal(user.email), 500);
      console.log('Signed in');
      clearTimeout(delay);
    }
  });
};
