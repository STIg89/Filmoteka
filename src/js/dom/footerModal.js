const modalRefs = document.querySelectorAll('#footer-modal-open');
const modals = document.querySelectorAll('.modal');
const body = document.body;

function openModal(elem) {
  elem.classList.add('active');
  body.classList.add('locked');
}

function closeModal(e) {
  if (
    e.target.classList.contains('modal-close') ||
    e.target.closest('.modal-close') ||
    e.target.classList.contains('modal-bg')
  ) {
    e.target.closest('.modal').classList.remove('active');
    body.classList.remove('locked');
  }
}

modalRefs.forEach(btn => {
  btn.addEventListener('click', e => {
    let data = e.target.dataset.modalOpen;

    modals.forEach(modal => {
      if (
        modal.dataset.modal == data ||
        modal.dataset.modal == e.target.closest('.modal-open').dataset.modalOpen
      ) {
        openModal(modal);
      }
    });
  });
});

modals.forEach(modal => {
  modal.addEventListener('click', e => closeModal(e));
});

window.addEventListener('keydown', e => {
  modals.forEach(modal => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      body.classList.remove('locked');
    }
  });
});
