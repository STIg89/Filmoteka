import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../api/firebase-config.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { showLoginError } from './showLoginError.js';
const signUpLoginRef = document.getElementById('signup-user-login');
const signUpPasswordRef = document.getElementById('signup-user-password');
const signUpFormRef = document.getElementById('signup-form');
const signUpBtnRef = document.querySelector('.signup-modal__button');

console.log(signUpFormRef);
async function createAccount(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.useremail.value;
  console.log(email);
  const password = event.currentTarget.elements.useremail.value;
  console.log(password);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
  } catch (error) {
    console.log(error);
    showLoginError(error);
  }
}

signUpFormRef.addEventListener('submit', createAccount);
