import Swiper from 'swiper';
import 'swiper/swiper.scss';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
var swiperD = new Swiper('.mySwiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  modules: [Navigation, Pagination],
  effect: 'coverflow',
  coverFlowEffect: {
    rotate: 20,
    stretch: 50,
    slideShadow: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Відкриття та закриття модалки футера----------------------------------------------

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
