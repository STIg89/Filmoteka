import axios from 'axios';

const API_KEY = 'e57746b2e4fe98cb5cc839cb405a15f1';
const BASE_URL = 'https://api.themoviedb.org/3';

async function getTrendingFilms() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error('getTrendingFilms error' + error);
  }
}

async function getMoviesSearch(query) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );

    return response.data;
  } catch (error) {
    console.error('getMoviesSearch error' + error);
  }
}

async function getMovieDetails(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('getMovieDetails error' + error);
  }
}

async function getMovieTrailer(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('getMovieTrailer error' + error);
  }
}

export { getTrendingFilms, getMoviesSearch, getMovieDetails, getMovieTrailer };
