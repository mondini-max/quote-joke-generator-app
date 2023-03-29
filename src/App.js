import React, { useState, useEffect } from 'react';
import './App.css';
import Jokes from './Components/Jokes';
import Quotes from './Components/Quotes';

const App = () => {
  const [route, setRoute] = useState('home');
  const onRouteChange = (route) => {
    setRoute(route);
  };

  return (
    <div className='quote-container' id='quote-container'>
      {route === 'home' ? (
        <>
          <h1>Random quote and joke generator</h1>
          {/* buttons */}
          <div className='buttons-container'>
            <button onClick={() => onRouteChange('quotes')} id='new-quote'>
              Quote
            </button>
            <button onClick={() => onRouteChange('joke')} id='new-quote'>
              Joke
            </button>
          </div>
        </>
      ) : route === 'quotes' ? (
        <Quotes onRouteChange={onRouteChange} />
      ) : route === 'joke' ? (
        <Jokes onRouteChange={onRouteChange} />
      ) : null}
    </div>
  );
};

export default App;
