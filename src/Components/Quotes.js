import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaTwitter, FaHome } from 'react-icons/fa';
import axios from 'axios';

const Quotes = ({ onRouteChange }) => {
  const [quotes, setQuotes] = useState([]);
  const [singleQuote, setSingleQuote] = useState({});
  const apiUrl = 'https://type.fit/api/quotes';

  useEffect(() => {
    try {
      axios.get(apiUrl).then((response) => {
        // handle success
        setQuotes(response?.data);
        console.log(response, quotes);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log(quotes);
  const newQuotes = () => {
    setSingleQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    // const quote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(singleQuote);
  };

  if (singleQuote.length === 0) {
    newQuotes();
  }
  return (
    <div>
      {/* quote */}

      <FaHome
        onClick={() => onRouteChange('home')}
        style={{ color: 'blue', fontSize: '2rem' }}
        title='Home'
      />

      <div className='quote-text'>
        <FaQuoteLeft size='3rem' />
        <span id='quote'>
          {' '}
          Before we get too depressed about the state of our politics, let's
          remember our history. The great debates of the past, all stirred great
          passions.
        </span>
      </div>
      {/* Author */}
      <div className='quote-author'>
        <span id='author'>John Doe</span>
      </div>
      {/* buttons */}
      <div className='buttons-container'>
        <button className='twitter-button' id='twitter' title='Tweet This !'>
          <FaTwitter />
        </button>
        <button onClick={newQuotes} id='new-quote'>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quotes;
