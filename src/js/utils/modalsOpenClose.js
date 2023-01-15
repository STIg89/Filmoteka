const refs = {
  closeModalBtn: document.querySelector('[signout-data-modal-close]'),
  modalLogIn: document.querySelector('[signout-data-modal]'),
};

refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modalLogIn.addEventListener("click", onBackdropClick);
window.addEventListener("keydown", onEscKeyPress);

function onCloseModal() {
  refs.modalLogIn.classList.toggle('is-hidden');
  window.removeEventListener("keydown", onEscKeyPress);
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscKeyPress(e) {
  if (e.code === "Escape") {
    onCloseModal();
  }
}

// document.querySelector('.backdrop').addEventListener('click', e => {
//     if (
//       e.target.classList.contains('button-modal-movie--close') ||
//       e.target.classList.contains('backdrop')
//     ) {
//       document.querySelector('.backdrop').classList.add('is-hidden');
//     }
//   });