import { refs } from './refs.js';

function onCloseSuccessModal() {
  refs.modalSuccess.classList.toggle('is-hidden');
  refs.modalSuccessCloseBtn.removeEventListener('click', onCloseSuccessModal);
}
export function showSuccessModal(email) {
  refs.modalSuccess.classList.remove('is-hidden');
  refs.modalSuccessCloseBtn.addEventListener('click', onCloseSuccessModal);
  refs.modalSuccess.addEventListener('click', onBackdropSuccessClick);
  refs.successModalText.innerHTML = `Success! </br> Hello ${email}`;
}

function onBackdropSuccessClick(e) {
  if (e.currentTarget === e.target) {
    onCloseSignUpModal();
  }
}

function onEscKeyPressSignUpModal(e) {
  if (e.code === 'Escape') {
    onCloseSignUpModal();
  }
}
