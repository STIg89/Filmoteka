const refs = {
    closeModalBtn: document.querySelector('.login-modal__close-button'),
    modalLogIn: document.querySelector('.login-modal__backdrop'),
}

refs.closeModalBtn.addEventListener('click', onCloseModal);

function onCloseModal() {
    refs.modalLogIn.classList.add('close-modal');
}

// function onCloseModal() {
//     refs.modalLogIn.classList.toggle('close-modal');
// }

// function onCloseModal() {
//     refs.modalLogIn.classList.toggle('is-hidden');
// }