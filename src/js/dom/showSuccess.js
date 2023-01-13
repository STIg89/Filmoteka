const textContainerSuccessRef = document.querySelector('.success-modal-text');
const modalSuccessRef = document.querySelector('[success-data-modal]');
const modalSuccessCloseBtnRef = document.querySelector(
  '[success-data-modal-close]'
);

export function onCloseModal() {
  modalSuccessRef.classList.toggle('is-hidden');
  modalSuccessCloseBtnRef.removeEventListener('click', onCloseModal);
}
export function showSuccessModal(email) {
  modalSuccessRef.classList.remove('is-hidden');
  modalSuccessCloseBtnRef.addEventListener('click', onCloseModal);
  textContainerSuccessRef.innerHTML = `Success! </br> Hello ${email}`;
}
