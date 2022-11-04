import axios from 'axios';

export const customAxios = axios.create({
  baseURL: 'https://backend-utec-timestamp.herokuapp.com/api/v1',
});
