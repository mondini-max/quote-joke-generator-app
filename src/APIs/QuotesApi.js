import axios from 'axios';

const QUOTES_BASE_URL = 'https://type.fit/api/quotes';

const QUOTES_AXIOS = axios.create({
  baseURL: QUOTES_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default QUOTES_AXIOS;
