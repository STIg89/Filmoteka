import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../api/firebase-config.js';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { showLoginError } from './showErrors.js';
import { userState } from './onAuthStateChanged.js';
import { refs } from './refs.js'; 
import { onCloseSignUpModal, onBackdropSignUpClick, onEscKeyPressSignUpModal } from './modalSignUp.js';

refs.headerLoginBtn.addEventListener('click', () => {
  refs.loginModal.classList.toggle('is-hidden');
  refs.loginModalCloseBtn.addEventListener('click', onCloseLogInModal);
  refs.loginModal.addEventListener('click', onBackdropLogInClick);
  window.addEventListener('keydown', onEscKeyPressLogInModal);
  refs.loginForm.addEventListener('submit', invokeResponseSet);
  refs.body.classList.add('no-scroll');
});
const signupEmailInput = refs.signupForm.querySelector('[name="useremail"]');
const signupPassInput = refs.signupForm.querySelector('[name="userpassword"]');
export async function invokeResponseSet(event) {
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
    refs.headerUserNoLoginContainer.classList.add('visually-hidden');
    refs.headerUserLogedinContainer.classList.remove('visually-hidden');

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

refs.signupBtnOnLoginModal.addEventListener('click', () => {
  signupEmailInput.value = '';
  signupPassInput.value = '';
  refs.divSignUpError.innerHTML = '';
  refs.policyCheckbox.checked = false;
  refs.signupBtn.disabled = true;
  refs.loginModal.classList.toggle('is-hidden');
  refs.signupModal.classList.toggle('is-hidden');
  refs.signupBtnClose.addEventListener('click', onCloseSignUpModal);
  refs.signupModal.addEventListener('click', onBackdropSignUpClick);
  window.removeEventListener('keydown', onEscKeyPressLogInModal);
  window.addEventListener('keydown', onEscKeyPressSignUpModal);
});

export function onCloseLogInModal() {
  refs.loginModal.classList.toggle('is-hidden');
  refs.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', onEscKeyPressLogInModal);
  refs.loginModalCloseBtn.removeEventListener('click', onCloseLogInModal);
  refs.loginModal.removeEventListener('click', onBackdropLogInClick);
  refs.body.classList.remove('no-scroll');
}

export function onBackdropLogInClick(e) {
  if (e.currentTarget === e.target) {
    onCloseLogInModal();
  }
}

export function onEscKeyPressLogInModal(e) {
  if (e.code === 'Escape') {
    onCloseLogInModal();
  }
}
