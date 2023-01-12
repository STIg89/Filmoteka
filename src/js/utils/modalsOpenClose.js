const refs = {
  closeModalBtn: document.querySelector('[signup-data-modal-close]'),
  modalLogIn: document.querySelector('[signup-data-modal]'),
};

refs.closeModalBtn.addEventListener('click', onCloseModal);

function onCloseModal() {
  refs.modalLogIn.classList.toggle('is-hidden');
}
