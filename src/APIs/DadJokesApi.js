import axios from 'axios';

const DAD_JOKE_BASE_URL = 'https://icanhazdadjoke.com';

const DAD_JOKES_AXIOS = axios.create({
  baseURL: DAD_JOKE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'User-Agent': 'axios/0.19.0',
  },
});

export default DAD_JOKES_AXIOS;
