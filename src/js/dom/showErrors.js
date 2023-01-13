import { AuthErrorCodes } from '@firebase/auth';
import { refs } from './refs.js';

const loginEmailInput = refs.loginForm.querySelector('[name="useremail"]');
const loginPassInput = refs.loginForm.querySelector('[name="userpassword"]');
function onFocusChange() {
  refs.divLoginEmailError.innerHTML = '';
  refs.divLoginPassError.innerHTML = '';
  loginPassInput.removeEventListener('focus', onFocusChange);
  loginEmailInput.removeEventListener('focus', onFocusChange);
}
export const showLoginError = error => {
  if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
    refs.divLoginPassError.style.display = 'block';
    refs.divLoginPassError.innerHTML = '❌ Wrong passowrd. Try again';
    loginPassInput.addEventListener('focus', onFocusChange);
  } else if (error.code === AuthErrorCodes.USER_DELETED) {
    refs.divLoginEmailError.style.display = 'block';
    refs.divLoginEmailError.innerHTML = '❌ No such email in our database';
    loginEmailInput.addEventListener('focus', onFocusChange);
  } else {
    console.log(error);
    refs.divLoginPassError.style.display = 'block';
    refs.divLoginPassError.innerHTML = `❌ Error: ${error.message}`;
    loginPassInput.addEventListener('focus', onFocusChange);
  }
};

export const showSignUpError = error => {
  refs.divSignUpError.style.display = 'block';
  if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
    refs.divSignUpError.innerHTML = ` ❌ You've already been registered. Please <a class="checkbox-link link" login-data-modal-open>log in</a>`;
    const loginLink = refs.divSignUpError.querySelector('.checkbox-link');
    loginLink.style.pointerEvents = 'all';
    loginLink.style.textDecoration = 'underline';
    loginLink.style.cursor = 'pointer';
    loginLink.addEventListener('click', () => {
      loginEmailInput.value = '';
      loginPassInput.value = '';
      refs.signupModal.classList.toggle('is-hidden');
      refs.loginModal.classList.toggle('is-hidden');
    });
  } else {
    refs.divSignUpError.innerHTML = `Error: ${error.message}`;
  }
};
