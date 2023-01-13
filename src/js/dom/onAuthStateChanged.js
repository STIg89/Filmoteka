import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../api/firebase-config.js';
import { getAuth, signOut } from 'firebase/auth';
import { loginModalRef } from './modalLogIn.js';
import { showSuccessModal } from './showSuccess.js';
import { signOut } from '../api/sign-out.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const userState = user => {
  auth.onAuthStateChanged(user => {
    if (!user) {
      console.log('Signed out');
      window.localStorage.removeItem('uid', uid);
      signOut(auth)
        .then(() => {
          console.log('We will miss you'); // should be attached to button sign out in header
        })
        .catch(error => {
          // An error happened.
        });
    } else {
      const uid = user.uid;
      window.localStorage.setItem('uid', uid);
      loginModalRef.classList.toggle('is-hidden');
      const delay = setTimeout(showSuccessModal(user.email), 500);
      console.log('Signed in');
      clearTimeout(delay);
    }
  });
};
