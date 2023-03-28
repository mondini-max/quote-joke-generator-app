import './App.css';
import { Helmet } from 'react-helmet';
import { FaQuoteLeft, FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <div className='quote-container' id='quote-container'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Quote generator</title>
      </Helmet>
      {/* quote */}
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
          <FaTwitter size='1rem' />
        </button>
        <button id='new-quote'>New Quote</button>
      </div>
    </div>
  );
}

export default App;
