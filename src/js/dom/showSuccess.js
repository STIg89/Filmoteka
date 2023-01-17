import { refs } from './refs.js';

function onCloseSuccessModal() {
  refs.modalSuccess.classList.toggle('is-hidden');
  refs.modalSuccessCloseBtn.removeEventListener('click', onCloseSuccessModal);
  refs.modalSuccess.removeEventListener('click', onBackdropSuccessClick);
  window.removeEventListener('keydown', onEscKeyPressSuccessModal);
  refs.body.classList.remove('no-scroll');
}
export function showSuccessModal(email) {
  refs.modalSuccess.classList.remove('is-hidden');
  refs.modalSuccessCloseBtn.addEventListener('click', onCloseSuccessModal);
  refs.modalSuccess.addEventListener('click', onBackdropSuccessClick);
  window.addEventListener('keydown', onEscKeyPressSuccessModal);
  refs.successModalText.innerHTML = `Success! </br> Hello ${email}`;
}

function onBackdropSuccessClick(e) {
  if (e.currentTarget === e.target) {
    onCloseSuccessModal();
  }
}

function onEscKeyPressSuccessModal(e) {
  if (e.code === 'Escape') {
    onCloseSuccessModal();
  }
}
