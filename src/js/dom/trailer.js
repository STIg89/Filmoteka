import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';
import { getMovieTrailer } from '../api/fetchAPI';
import { refs } from './refs';

function addListenerAddBtnTrailer() {
  const trailer = document.querySelector('#trailer');
  trailer.addEventListener('click', onClickBtnTrailer);
}

async function onClickBtnTrailer(e) {
  let movieID = Number(refs.modalMovieContent.getAttribute('data-id'));

  const data = await getMovieTrailer(movieID);
  const { results } = data;

  let key = '';
  results.forEach(data => {
    if (data.type === 'Trailer') {
      key = data.key;
    }
  });

  const instance = basicLightbox.create(`  
  <iframe  width="660" height="415" src='https://www.youtube.com/embed/${key}' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
  instance.show();
}

export { addListenerAddBtnTrailer };
