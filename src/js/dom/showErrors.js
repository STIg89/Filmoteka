import { AuthErrorCodes } from '@firebase/auth';

const divLoginEmailError = document.getElementById('loginemail-error-message');
const divLoginPassError = document.getElementById(
  'loginpassword-error-message'
);
const loginFormRef = divLoginEmailError.parentNode;
const loginEmailInputRef = loginFormRef.querySelector('[name="useremail"]');
console.log(loginEmailInputRef);
const loginPassInputRef = loginFormRef.querySelector('[name="userpassword"]');

function onFocusChange() {
  divLoginEmailError.innerHTML = '';
  divLoginPassError.innerHTML = '';
  loginPassInputRef.removeEventListener('focus', onFocusChange);
  loginEmailInputRef.removeEventListener('focus', onFocusChange);
}
export const showLoginError = error => {
  console.log(AuthErrorCodes);
  if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
    divLoginPassError.style.display = 'block';
    divLoginPassError.innerHTML = '❌ Wrong passowrd. Try again';
    loginPassInputRef.addEventListener('focus', onFocusChange);
  } else if (error.code === AuthErrorCodes.USER_DELETED) {
    divLoginEmailError.style.display = 'block';
    divLoginEmailError.innerHTML = '❌ No such email in our database';
    loginEmailInputRef.addEventListener('focus', onFocusChange);
  } else {
    console.log(error);
    divLoginPassError.style.display = 'block';
    divLoginPassError.innerHTML = `❌ Error: ${error.message}`;
    loginPassInputRef.addEventListener('focus', onFocusChange);
  }
};

const divSignUpError = document.querySelector('#signup-error-message');
export const showSignUpError = error => {
  console.log(divSignUpError);
  divSignUpError.style.display = 'block';
  if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
    divSignUpError.innerHTML = ` ❌ You've already been registered. Please log in`;
  } else {
    divSignUpError.innerHTML = `Error: ${error.message}`;
  }
};
