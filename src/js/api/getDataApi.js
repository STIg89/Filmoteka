import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export async function getDataApi(requestURL) {
  try {
    const response = await axios.get(requestURL).then(res => res.data);
    return response;
  } catch (error) {
    Notify.failure('Something went wrong! Try again');
    console.log(error);
  }
}
