import React, { useState } from 'react';
import { FaQuoteLeft, FaTwitter, FaHome } from 'react-icons/fa';
import QUOTES_AXIOS from '../APIs/QuotesApi';
import useAxios from '../Hooks/useAxios';

const Quotes = ({ onRouteChange }) => {
  const [singleQuote, setSingleQuote] = useState({});
  const [counter, setCounter] = useState(0);

  const [quotes, error, loading] = useAxios({
    axiosInstance: QUOTES_AXIOS,
    method: 'GET',
    url: '/',
    requestConfig: {
      header: {
        'Content-Language': 'en-US',
      },
    },
  });

  const quoteHandler = () => {
    setSingleQuote(quotes[Math.floor(Math.random() * (quotes.length / 2))]);
  };

  const message =
    typeof singleQuote == 'object' && Object.entries(singleQuote).length === 0
      ? 'object is empty'
      : 'object is not empty';

  return (
    <article>
      {/* quote */}

      <FaHome
        onClick={() => onRouteChange('home')}
        style={{ color: 'blue', fontSize: '2rem' }}
        title='Home'
      />
      {loading && <p>Loading...</p>}
      {/* {!loading && error && <p className='errMsg'>{error}</p>} */}
      {!loading && quotes && (
        <>
          <div className='quote-text'>
            <FaQuoteLeft size='3rem' />
            <span id='quote'>
              {' '}
              {message === 'object is empty'
                ? 'Courage is going from failure to failure without losing enthusiasm.'
                : singleQuote?.text}
            </span>
          </div>
          {/* Author */}
          <div className='quote-author'>
            <span id='author'>
              {' '}
              {message === 'object is empty'
                ? 'Winston Churchill'
                : singleQuote?.author}
            </span>
          </div>
          {/* buttons */}
          <div className='buttons-container'>
            <button
              className='twitter-button'
              id='twitter'
              title='Tweet This !'
            >
              <FaTwitter />
            </button>
            <button onClick={quoteHandler} id='new-quote'>
              New Quote
            </button>
          </div>
        </>
      )}
      {!loading && !error && quotes && !singleQuote && (
        <p>No dad Joke to display</p>
      )}
    </article>
  );
};

export default Quotes;
