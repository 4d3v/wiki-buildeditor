import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Button, Card, Container } from 'react-bootstrap';

const Faq = () => {
  return (
    <Container>
      <div className='text-center w-100 mx-auto py-4'>
        <h1 className='font-weight-bold'>FAQ</h1>
        <Accordion className='w-75 mx-auto'>
          <Card className='my-1'>
            <Accordion.Toggle as={Button} variant='dark' eventKey='0'>
              How long have you been building this site
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                You can check this <Link to='/logs'>Here</Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className='my-1'>
            <Accordion.Toggle as={Button} variant='dark' eventKey='2'>
              Do you plan to add equipment?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='2'>
              <Card.Body>
                I'm considering it but as you may know, right now it's very hard
                to get access to the game and that makes it a hard thing to
                implement now.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className='my-1'>
            <Accordion.Toggle as={Button} variant='dark' eventKey='3'>
              Does this site have its own api? Can I use it?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='3'>
              <Card.Body>
                Yes and yes but please send me an{' '}
                <a href='mailto:elyon.database@gmail.com'>email</a> first
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className='my-1'>
            <Accordion.Toggle as={Button} variant='dark' eventKey='4'>
              Will you make it open source
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='4'>
              <Card.Body>I'm considering it.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className='my-1'>
            <Accordion.Toggle as={Button} variant='dark' eventKey='5'>
              What technology did you use to build this site
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='5'>
              <Card.Body>
                React for the frontend. Api is Express with TypeScript. MongoDB
                as database.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </Container>
  );
};

export default Faq;
