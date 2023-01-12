import { AuthErrorCodes } from '@firebase/auth';

// const divLoginError = ;
export const hideLoginError = () => {
  divLoginError.display = 'none';
  loginErrorMessage.innerHTML = '';
};

export const showLoginError = error => {
  divLoginError.display = 'block';
  if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
    loginErrorMessage.innerHTML = 'Wrong passowrd. Try again';
  } else {
    loginErrorMessage.innerHTML = `Error: ${error.message}`;
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

export const showLoginState = user => {
  authState.innerHTML = `You're logged in as ${user.displayName}`;
};
