import React from 'react';
import { FaRegLaughBeam, FaTwitter, FaHome } from 'react-icons/fa';
import useAxios from '../Hooks/useAxios';
import DAD_JOKES_AXIOS from '../APIs/DadJokesApi';
import tweetQuote from '../Hooks/tweetQuote';

const Jokes = ({ onRouteChange }) => {
  const [joke, error, loading, reFetchData] = useAxios({
    axiosInstance: DAD_JOKES_AXIOS,
    method: 'GET',
    url: '/',
    requestConfig: {
      headers: {
        'Content-Language': 'en-US',
      },
    },
  });
  return (
    <article>
      <FaHome
        onClick={() => onRouteChange('home')}
        style={{ color: 'blue', fontSize: '2rem' }}
        title='Home'
      />
      <h1> Random Joke</h1>
      {loading && <p>Loading...</p>}
      {/* {!loading && error && <p className='errMsg'>{error}</p>} */}
      {!loading && joke && (
        <>
          <div className='quote-text'>
            <FaRegLaughBeam style={{ color: '#ffb90b' }} />
            <span id='quote'> {joke?.joke}</span>
          </div>
          {/* Author */}
          <div className='quote-author'>
            <span id='author'></span>
          </div>
          {/* buttons */}
          <div className='buttons-container'>
            <button
              className='twitter-button'
              id='twitter'
              title='Tweet This !'
              onClick={() => tweetQuote(joke?.joke)}
            >
              <FaTwitter />
            </button>
            <button onClick={reFetchData} id='new-quote'>
              New Joke
            </button>
          </div>
        </>
      )}
      {!loading && !error && !joke && <p>No dad Joke to display</p>}
    </article>
  );
};

export default Jokes;
