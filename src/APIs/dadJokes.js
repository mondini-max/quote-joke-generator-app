import axios from 'axios';

const DAD_JOKE_BASE_URL = 'https://icanhazdadjoke.com';

export default axios.create({
  baseURL: DAD_JOKE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'User-Agent': 'axios/0.19.0',
  },
});
