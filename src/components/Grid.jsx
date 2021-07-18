import React from 'react';
// import PropTypes from 'prop-types';
import twitter from './img/twitter.png';
import spa from './img/spa.png';
import wan from './img/wan.jpg';
import github from './img/github.png';
import './Grid.css';

const Grid = () => {
  return (
    <div className='container'>
      <div className='bg'>
        <img src={twitter} alt='twitter posts' />
        <div className='overlay'>
          <h2>
            <a
              href='https://twitter-posts.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter Posts
            </a>
          </h2>
          <p>Affichage des posts venant de l' Api Twitter</p>
          <a
            href='https://github.com/thomas37000/SynApi'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
      </div>
      <div className='bg'>
        <img src={spa} alt='aplli de rencontre pour Aliens' />
        <div className='overlay'>
          <h2>
            <a
              href='https://codesandbox.io/s/spa-e77cb'
              target='_blank'
              rel='noopener noreferrer'
            >
              SPA
            </a>
          </h2>
          <p>Une Application pour rencontrer d' autres Aliens</p>
          <a
            href='https://github.com/thomas37000/ufo/tree/main/ufo'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
      </div>
      <div className='bg'>
        <img src={wan} alt='Women At Nantes' />
        <div className='overlay'>
          <h2>
            <a
              href='https://github.com/WildCodeSchool/nts-js-202009-p3-frontend-wan'
              target='_blank'
              rel='noopener noreferrer'
            >
              Women At Nantes
            </a>
          </h2>
          <p>
            <h4>Projet 3</h4>Application pour l' association Women At Nantes.
          </p>
        </div>
      </div>
      <div className='bg'>
        <img
          src='https://nantes-events.netlify.app/static/media/logo-nantes-event.b4db1e07.png'
          alt='Nantes Events'
        />
        <div className='overlay'>
          <h2>
            <a
              href='https://nantes-events.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Nantes Event's
            </a>
          </h2>
          <p>
            <h4>Projet 2</h4>Une application pour trouver quoi faire à Nantes
          </p>
          <a
            href='https://github.com/thomas37000/Nantes-Events'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
        <div className='bg'>
          <img
            src='https://www.hotel-nantes.fr/usermedia/photo-634831159348225405-1.JPG?w=412&amp;h=365&amp;Crop=true'
            alt='île de Nantes'
          />
          <div className='overlay'>
            <h2>
              <a
                href='https://thomas37000.github.io/ileDeNantes/'
                target='_blank'
                rel='noopener noreferrer'
              >
                île de Nantes
              </a>
            </h2>
            <p>
              <h4>Projet 1</h4> Création d' un site en Html / Css / Js en
              équipe.
            </p>
            <a
              href='https://github.com/thomas37000/ileDeNantes'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Grid.propTypes = {

// };

export default Grid;
