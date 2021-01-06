import React from 'react';
// import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <div className='text-center w-100 mx-auto py-4'>
        <h1 className='d-inline mx-1 font-weight-bold'>Elyon Database</h1>{' '}
        <span>Temporary Page</span>
        <h5 className='text-warning'>
          Web application is in active development.
        </h5>
        <h5>
          This page is temporary and is going to later be replaced with the
          actual home page.
        </h5>
        <h5>
          All the translations and resources was gotten from{' '}
          <a href='https://www.reddit.com/r/ElyonOnline/comments/jc6bvi/engrus_translated_information_skills_artifacts/'>
            here.{' '}
          </a>
          Thanks to everyone that contributed to this.{' '}
        </h5>
      </div>

      <div className='text-center w-100 mx-auto py-4'>
        <h4>Build editor quick guide</h4>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/p9qKoMZO6QE'
          frameBorder='0'
          title='beguide'
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Home;
