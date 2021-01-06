import React from 'react';
import { Container } from 'react-bootstrap';
import LinkBackBtn from '../components/LinkBackBtn';

const NotFound = ({ prev }) => {
  return (
    <Container className='not-found-container'>
      <div className='img-naomi'></div>
      <span className='not-found-center not-found-span'>Oops...</span>
      <h1 className='not-found-center not-found-h1 font-weight-bold'>404</h1>
      <p className='not-found-center not-found-p'>
        Looks like the page you are looking for does not exist or are under
        construction
      </p>
      <div className='not-found-center not-found-btn-wrapper'>
        <LinkBackBtn to={prev} />
      </div>
    </Container>
  );
};

NotFound.defaultProps = { prev: '/' };

export default NotFound;
