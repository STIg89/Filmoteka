import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../api/firebase-config.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { showSignUpError } from './showErrors.js';
import { showSuccessModal, onCloseModal } from './showSuccess.js';
import { refs } from './refs.js';

if (localStorage.getItem('uid')) {
  if (refs.headerUserNoLoginContainer.classList.contains('is-hidden')) {
    refs.headerUserNoLoginContainer.classList.remove('is-hidden');
    refs.headerUserEmailDiv.innerHTML = userObj.userlogin;
  } else return;
} else {
  console.log(refs.headerUserNoLoginContainer.classList.contains('is-hidden'));
  if (refs.headerUserLogedinContainer.classList.contains('is-hidden')) {
    refs.headerUserLogedinContainer.classList.remove('is-hidden');
  } else return;
}

refs.headerSignupBtn.addEventListener('click', () => {
  refs.signupModal.classList.toggle('is-hidden');
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
