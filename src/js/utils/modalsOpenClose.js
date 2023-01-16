const refs = {
  closeModalBtn: document.querySelector('[signout-data-modal-close]'),
  modalLogIn: document.querySelector('[signout-data-modal]'),
};

refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modalLogIn.addEventListener('click', onBackdropClick);
// window.addEventListener("keydown", onEscKeyPress);

function onCloseModal() {
  refs.modalLogIn.classList.toggle('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  refs.body.classList.remove('no-scroll');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

// function onEscKeyPress(e) {
//   if (e.code === "Escape") {
//     onCloseModal();
//   }
// }
