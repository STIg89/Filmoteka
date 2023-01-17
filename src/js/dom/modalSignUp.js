import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../api/firebase-config.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { showSignUpError } from './showErrors.js';
import { showSuccessModal } from './showSuccess.js';
import { refs } from './refs.js';

refs.headerSignupBtn.addEventListener('click', () => {
  refs.signupModal.classList.toggle('is-hidden'); // open modal wondow
  refs.signupForm.addEventListener('submit', createAccount); // listener on form submit
  refs.policyCheckbox.addEventListener('click', toggleBtnProperty);
  refs.signupBtnClose.addEventListener('click', onCloseSignUpModal);
  refs.signupModal.addEventListener('click', onBackdropSignUpClick);
  window.addEventListener('keydown', onEscKeyPressSignUpModal);
  refs.body.classList.add('no-scroll');
});
async function createAccount(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.useremail.value;
  const password = event.currentTarget.elements.userpassword.value;
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    refs.signupModal.classList.toggle('is-hidden');
    showSuccessModal(user.email);
    refs.signupForm.removeEventListener('submit', createAccount);
    refs.policyCheckbox.removeEventListener('click', toggleBtnProperty);
    refs.signupBtnClose.removeEventListener('click', onCloseSignUpModal);
    refs.signupModal.removeEventListener('click', onBackdropSignUpClick);
    window.removeEventListener('keydown', onEscKeyPressSignUpModal);
  } catch (error) {
    showSignUpError(error);
  }
}

function toggleBtnProperty(evt) {
  if (evt.target.checked) {
    refs.signupBtn.disabled = false;
  } else {
    refs.signupBtn.disabled = true;
  }
}

export function onCloseSignUpModal() {
  refs.signupModal.classList.toggle('is-hidden');
  refs.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', onEscKeyPressSignUpModal);
}

export function onBackdropSignUpClick(e) {
  if (e.currentTarget === e.target) {
    onCloseSignUpModal();
  }
}

export function onEscKeyPressSignUpModal(e) {
  if (e.code === 'Escape') {
    onCloseSignUpModal();
  }
}
