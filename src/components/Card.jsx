import React from 'react';
import logo from '../../src/logo.svg';
import './Card.css';
// import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div>
      <div className='description'>
        <div className='headerDesc'>
          Bonjour je suis Thomas Chalanson,{' '}
          <h1>Dévellopeur Web Javascript - Front End</h1>
        </div>
        <div>
          Je travaille avec la bibliothèque <h2>React</h2>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
      </div>
    </div>
  );
};

// Card.propTypes = {

// };

export default Card;
