import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../api/firebase-config.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { showSignUpError } from './showErrors.js';
const signUpLoginRef = document.getElementById('signup-user-login');
const signUpPasswordRef = document.getElementById('signup-user-password');
const signUpFormRef = document.getElementById('signup-form');
const signUpBtnRef = document.querySelector('.signup-modal__button');
const policyCheckboxRef = document.querySelector('[name="policy-checkbox"]');

console.log(signUpFormRef);
async function createAccount(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.useremail.value;
  const password = event.currentTarget.elements.useremail.value;
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    showSignUpSuccess(user); // no function created
  } catch (error) {
    showSignUpError(error);
  }
}

signUpFormRef.addEventListener('submit', createAccount);

policyCheckboxRef.addEventListener('click', toggleBtnProperty);

function toggleBtnProperty(evt) {
  if (evt.target.checked) {
    signUpBtnRef.disabled = false;
  } else {
    signUpBtnRef.disabled = true;
  }
}
