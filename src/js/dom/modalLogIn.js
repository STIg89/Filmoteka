// import { signInWithEmailAndPassword } from '../api/sign-in.js';
// import { auth } from '../api/firebase-config.js';
// import { showLoginError } from './showLoginError.js';
// const signInLoginRef = document.getElementById('signin-user-login');
// const signInPasswordRef = document.getElementById('signin-user-password');
// const signInFormRef = document.getElementById('login-form');

// async function invokeResponseSet(evt) {
//   evt.preventDefault();
//   const email = evt.currentTarget.elements.useremail.value;
//   console.log(evt.currentTarget.elements.useremail.value);
//   const password = evt.currentTarget.elements.userpassword.value;
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//   } catch (error) {
//     console.log(error);
//     showLoginError(error);
//   }

//   //   // ...
//   // })
//   // .catch(error => {
//   //   const errorCode = error.code;
//   //   console.log('Oops');
//   //   const errorMessage = error.message;
//   // });
// }

// signInFormRef.addEventListener('submit', invokeResponseSet(evt));
