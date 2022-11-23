import { getStorageItem } from '@/utils/localStorage';
import axios from 'axios';

const getToken = () => {
  const token = getStorageItem('token');
  if (token) {
    return `Bearer ${token}`;
  }
  return '';
};

const api = axios.create({
  baseURL: 'http://localhost:3300',
});

api.interceptors.response.use(
  function (response) {
    const { status } = response;

    if (status === 401 || status === 403) {
      localStorage.clear();
      window.location.href = 'http://localhost:5173/login';
    }

    return response;
  },
  function (error) {
    const {
      response: { status },
    } = error;

    if (status === 401 || status === 403) {
      localStorage.clear();
      window.location.href = 'http://localhost:5173/login';
    }
    return Promise.reject(error);
  }
);

export { api, getToken };
