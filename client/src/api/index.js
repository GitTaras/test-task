import { restURL } from './baseURL';
import axios from 'axios';

export function getCartItemsReq() {
  return axios
    .get(`${restURL}/cart`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        throw error;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        throw error;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        throw error;
      }
      console.log(error.config);
    });
}
