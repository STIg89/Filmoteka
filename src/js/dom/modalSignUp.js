import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../api/firebase-config.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { showSignUpError } from './showErrors.js';
import { showSuccessModal, onCloseModal } from './showSuccess.js';
import { refs } from './refs.js';

refs.headerSignupBtn.addEventListener('click', () => {
  refs.signupModal.classList.toggle('is-hidden');
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
    const delay = setTimeout(showSuccessModal(user.email), 500);
    refs.signupForm.removeEventListener('submit', createAccount);
    refs.policyCheckbox.removeEventListener('click', toggleBtnProperty);
    clearTimeout(delay);
  } catch (error) {
    showSignUpError(error);
  }
}

refs.signupForm.addEventListener('submit', createAccount);

refs.policyCheckbox.addEventListener('click', toggleBtnProperty);

function toggleBtnProperty(evt) {
  if (evt.target.checked) {
    refs.signupBtn.disabled = false;
  } else {
    refs.signupBtn.disabled = true;
  }
}

// refs.signupBtnClose.addEventListener('click', onCloseModal);
// refs.signupModal.addEventListener('click', onBackdropClick);
// window.addEventListener('keydown', onEscKeyPress);
//
// function onCloseModal() {
//   refs.signupModal.classList.toggle('is-hidden');
//   refs.body.classList.remove('no-scroll');
//   window.removeEventListener('keydown', onEscKeyPress);
// }
//
// function onBackdropClick(e) {
//   if (e.currentTarget === e.target) {
//     onCloseModal();
//   }
// }
//
// function onEscKeyPress(e) {
//   if (e.code === 'Escape') {
//     onCloseModal();
//   }
// }
