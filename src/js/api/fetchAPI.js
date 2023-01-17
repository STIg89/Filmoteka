import axios from 'axios';
import { showSpinner, hideSpinner } from '../utils/spinner';

const API_KEY = 'e57746b2e4fe98cb5cc839cb405a15f1';
const BASE_URL = 'https://api.themoviedb.org/3';

async function getTrendingFilms(page) {
  try {
    showSpinner();
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );

    return response.data;
  } catch (error) {
    console.error('getTrendingFilms error' + error);
  } finally {
    hideSpinner();
  }
}

async function getMoviesSearch(query, page = 1) {
  try {
    showSpinner();
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );

    return response.data;
  } catch (error) {
    console.error('getMoviesSearch error' + error);
  } finally {
    hideSpinner();
  }
}

async function getMovieDetails(id) {
  try {
    showSpinner();
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('getMovieDetails error' + error);
  } finally {
    hideSpinner();
  }
}

async function getMovieTrailer(id) {
  try {
    showSpinner();
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('getMovieTrailer error' + error);
  } finally {
    hideSpinner();
  }
}

async function getGenres() {
  try {
    showSpinner();
    const response = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error('getGenres error' + error);
  } finally {
    hideSpinner();
  }
}

async function getTopFilms() {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error('getTopFilms error' + error);
  }
}

export {
  getTrendingFilms,
  getMoviesSearch,
  getMovieDetails,
  getMovieTrailer,
  getGenres,
  getTopFilms,
};
