import React, { useEffect } from 'react';
import { Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listRunetraitDetails } from '../actions/archSkillsActions';
import IconDmgTpOrMechanic from '../components/IconDmgTpOrMechanic';
import LinkBackBtn from '../components/LinkBackBtn';
import Loader from '../components/Loader';
import Message from '../components/Message';
import WikiNavigationCard from '../components/WikiNavigationCard';
import { S3_URL } from '../constants/awss3';
import NotFound from './NotFound';

const WikiRunetraitDetails = ({ match }) => {
  const dispatch = useDispatch();
  const runetraitDetails = useSelector(state => state.runetraitDetails);
  const { loading, err, runetrait } = runetraitDetails;

  useEffect(() => {
    dispatch(listRunetraitDetails(match.params.runetrait));
  }, [dispatch, match]);

  const wikiRunetraitCardStyles = { width: '19rem', marginBottom: '1rem' },
    wikiRunetraitCardHeaderStyles = { height: '2.2rem' },
    wikiRunetraitCardImgStyles = {
      position: 'absolute',
      top: '-6px',
      left: '4px',
    };

  const wikiRunetraitDetailsLiStyles = {
    background: '#fcfcfc',
    padding: '0.3rem 1.25rem',
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : err ? (
        err.error.statusCode === 404 ? (
          <NotFound prev={`/wiki/runetraits`} />
        ) : (
          <Message variant='danger' children={err.message} />
        )
      ) : (
        runetrait.data && (
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <div className='d-flex align-items-center'>
                  <h1 className='mr-2 font-weight-bold'>
                    {runetrait.data.name}
                  </h1>
                </div>
                <p>{runetrait.data.description}</p>
                <ListGroup variant='flush'>
                  <div className='mt-3'>
                    <i className='fas fa-quote-left fa-fw'></i>&nbsp;
                    <span className='mr-1'>Mechanics</span>
                    <ListGroup.Item style={wikiRunetraitDetailsLiStyles}>
                      <IconDmgTpOrMechanic
                        mechanics={runetrait.data.mechanics}
                      />
                    </ListGroup.Item>
                  </div>
                  <div className='my-2'>
                    <span>group: {runetrait.data.group}</span>
                  </div>
                  <div className='my-2'>
                    <span>tier: {runetrait.data.categoryTier}</span>
                  </div>
                </ListGroup>
              </Col>
              <Col xs={8} sm={4}>
                <Card style={wikiRunetraitCardStyles}>
                  <Card.Header style={wikiRunetraitCardHeaderStyles}>
                    <Image
                      src={`${S3_URL}/runetraits/${runetrait.data.slug}-icon.png`}
                      height='60px'
                      width='60px'
                      style={wikiRunetraitCardImgStyles}
                    />
                    <h4 className='text-right'>{runetrait.data.name}</h4>
                  </Card.Header>
                  <Card.Body className='pt-4'>
                    <Image
                      src={`${S3_URL}/runetraits/gifs/${runetrait.data.slug}.gif`}
                      thumbnail
                    />
                  </Card.Body>
                </Card>
                <WikiNavigationCard />
              </Col>
            </Row>
            <LinkBackBtn to={'/wiki/runetraits'} />
          </Container>
        )
      )}
    </>
  );
};

export default WikiRunetraitDetails;
