import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../api/firebase-config.js';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { showLoginError } from './showErrors.js';
import { userState } from './onAuthStateChanged.js';

const signInFormRef = document.getElementById('login-form');
export const loginModalRef = document.querySelector('[login-data-modal]');

async function invokeResponseSet(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.useremail.value;
  const password = event.currentTarget.elements.userpassword.value;
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    userState(user);
  } catch (error) {
    showLoginError(error);
  }
  //   // ...
  // })
  // .catch(error => {
  //   const errorCode = error.code;
  //   console.log('Oops');
  //   const errorMessage = error.message;
  // });
}

signInFormRef.addEventListener('submit', invokeResponseSet);
