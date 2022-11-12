import axios from 'axios';

export const customAxios = axios.create({
  baseURL: 'https://utec-timestamp-rebuild.onrender.com/api/v1',
});
