import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row, Table } from 'react-bootstrap';
import injectSheet from 'react-jss';
import { listMechanics } from '../actions/archSkillsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import RenderTableRowData from '../components/RenderTableRowData';
import WikiNavigationCard from '../components/WikiNavigationCard';

const styles = {
  msgFirst: {
    marginBottom: '-13px',
  },
  mechanicTypeStyles: {
    border: 'none',
    background: '#e1e1e1',
    padding: '0.5rem',
  },
  buff: {
    background: '#e1e1e1',
  },
  debuff: {
    background: '#f2e0e0',
  },
  control: {
    background: '#e0e8f2',
  },
  effect: {
    background: '#f2ede0',
  },
};

const WikiMechanic = ({ classes }) => {
  const dispatch = useDispatch();
  const mechanicsList = useSelector(state => state.mechanicsList);
  const mechs = { buff: [], debuff: [], control: [], effect: [] };
  const { loading, err, mechanics } = mechanicsList;

  const populateMechanics = mechanicsData => {
    mechanicsData.forEach(mech => mechs[mech.type].push(mech));
  };

  useEffect(() => {
    dispatch(listMechanics());
  }, [dispatch]);

  if (mechanics.data) populateMechanics(mechanics.data);

  const wikiMechTheadStyles = { backgroundColor: '#e3cdff' };

  return (
    <>
      {loading ? (
        <Loader />
      ) : err ? (
        <Message variant='danger' children={err.message} />
      ) : (
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <h1 className='font-weight-bold'>Mechanics</h1>
              <div className={classes.msgFirst}>
                <Message
                  variant='info'
                  children='The content of this page might be changed and improved once we get more information.'
                />
              </div>
              <Message
                variant='info'
                children="Those icons aren't from the game. I made them to have as a placeholder, so it probably will be switched with the game's one later."
              />
              <p>
                Up to this point the known mechanics present in the game are
                Buff, Debuff, Control and Effect.
              </p>
            </Col>
            <Col xs={8} sm={4}>
              <WikiNavigationCard />
            </Col>
          </Row>
          <div className='my-2'>
            <Table responsive hover>
              <thead style={wikiMechTheadStyles}>
                <tr>
                  <th>&nbsp;&nbsp;&nbsp;#</th>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              {[['buff'], ['debuff'], ['control'], ['effect']].map((el, i) => {
                return (
                  <Fragment key={`${el[0]}-${i + 1}`}>
                    <thead>
                      <tr
                        className={`${classes.mechanicTypeStyles} ${classes[el]}`}
                      >
                        <th>{el[0].toUpperCase()}S</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {mechanics.data && (
                        <RenderTableRowData
                          dataArr={mechs[el[0]]}
                          strType='mechanics'
                        />
                      )}
                    </tbody>
                  </Fragment>
                );
              })}
            </Table>
          </div>
        </Container>
      )}
    </>
  );
};

export default injectSheet(styles)(WikiMechanic);
