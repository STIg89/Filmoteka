import Swiper, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/autoplay/autoplay.scss';

import { getTopFilms } from '../api/fetchAPI';
import { refs } from './refs';

const { topMovieEll } = refs;

renderTopFilms();

async function renderTopFilms() {
  const data = await getTopFilms();
  renderGallerySlider(data.results);
  const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 2,

    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 2,
      },

      768: {
        slidesPerView: 4,
        spaceBetween: 4,
      },

      1280: {
        slidesPerView: 8,
        spaceBetween: 6,
      },
    },
    direction: 'horizontal',
    effect: 'fade',
    loop: true,
    speed: 10000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      },
    },
  });
}

function renderGallerySlider(data) {
  const markup = data
    .map(({ id, poster_path, original_title }) => {
      return `<div  class="topMovieGallery_slide swiper-slide"><div class="movie__item topMovie_container" data-id="${id}">
      <img class="topMovie_img"  src= "https://image.tmdb.org/t/p/w500/${poster_path}"
      alt="${original_title}" loading="lazy"></div></div>`;
    })
    .join('');

  topMovieEll.insertAdjacentHTML('beforeend', markup);
}
