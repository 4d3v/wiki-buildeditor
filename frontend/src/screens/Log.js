import React from 'react';
import { Container } from 'react-bootstrap';

const Log = () => {
  return (
    <Container className='text-center'>
      <h2>LOGS</h2>
      <ul className='text-left w-50 mx-auto'>
        <li>17/12/2020 - Initial public release</li>
        <li>
          18/10/2020 - Started Web Application prototyping and development
        </li>
      </ul>
      <h2>TODOS</h2>
      <ul className='text-left w-50 mx-auto'>
        <li>Replace sephirot icons on wiki with better quality ones</li>
        <li>Reduce amount of image requests</li>
        <li>Do some code refactoring</li>
        <li>
          Update database property values to match the new updated game's
          tooltip
        </li>
        <li>Improve UI</li>
        <li>
          Learn about localstorage and use it to reduce amount of requests on
          certain api's endpoints
        </li>
      </ul>
    </Container>
  );
};

export default Log;
