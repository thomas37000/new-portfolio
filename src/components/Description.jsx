import React from 'react';
// import PropTypes from 'prop-types';
import logo from '../../src/logo.svg';
import './Description.css';

const Description = () => {
  return (
    <div>
      <div className='mainDesc'>
        <div className='avatar'>
          <img
            src='https://avatars.githubusercontent.com/u/31045816?s=400&u=49e074ffd0a6ae0cba98ff5d7ceb6da1649fa542&v=4'
            alt='thomas chalanson'
          />
        </div>
        <div className='description'>
          <div className='headerDesc'>
            Bonjour je suis Thomas Chalanson,{' '}
            <h1>Dévellopeur Web Javascript - Front End</h1>
          </div>
          <div>
            Je travaille avec la bibliothèque <h2>React</h2>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
          <div className='smallDesc'>
            j'apprends mon futur métier à coder proprement avec " esLint " et ce
            secteur me passionne car il faut constamment apprendre et ne pas se
            reposer sur ses lauriers. A côté de ça j'ai créé un label de Techno
            où je produis des Artistes / vends les Vinyles du label.
          </div>
        </div>
      </div>
    </div>
  );
};

// Description.propTypes = {

// };

export default Description;
