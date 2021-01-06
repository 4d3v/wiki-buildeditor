import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import injectSheet from 'react-jss';
import { listArchSkills } from '../actions/archSkillsActions';
import LinkNextBtn from '../components/LinkNextBtn';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { S3_URL } from '../constants/awss3';

const styles = {
  wikiContainer: {
    maxWidth: '1250px',
    textAlign: 'center',
  },
  wikiContentsWrapper: {
    height: '680px',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  archList: {
    display: 'flex',
    lineHeight: 0,
    textAlign: 'center',
    padding: 0,
  },
  arch: {
    position: 'relative',
    display: 'inline-block',
    textDecoration: 'none',
    listStyle: 'none',
    width: '236px',
    height: '630px',
    verticalAlign: 'top',
    // marginLeft: '5px',
    // marginRight: '5px',
  },
  archLink: {
    display: 'block',
    overflow: 'hidden',
    position: 'relative',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '236px',
    height: '630px',
    paddingTop: '220px',
    boxSizing: 'border-box',
    '-webkit-transition': '0.3s',
    transition: '0.3s',
    filter: 'grayscale(75%)',
    transform: 'scale(0.95, 0.95)',

    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: '2px solid #ecc594',
      content: '""',
      '-webkit-transition': '.3s',
      transition: '.3s',
    },
  },
  thumbWar: {
    '&::before': {
      content: '""',
      background: `url(${S3_URL}/archetypes/thumb-war.jpg) 50% 50% no-repeat`,
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '258px',
      height: '674px',
      margin: '-337px 0 0 -140px',
    },
    '&:hover': {
      filter: 'grayscale(0)',
      transform: 'scale(1, 1)',
    },
    '& $archIcon': {
      backgroundPositionY: 0,
    },
  },
  thumbEle: {
    '&::before': {
      content: '""',
      background: `url(${S3_URL}/archetypes/thumb-ele.jpg) 50% 50% no-repeat`,
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '258px',
      height: '674px',
      margin: '-337px 0 0 -140px',
    },
    top: '45px',
    '&:hover': {
      filter: 'grayscale(0)',
      transform: 'scale(1, 1)',
    },
    '& $archIcon': {
      backgroundPositionY: '-150px',
    },
  },
  thumbMys: {
    '&::before': {
      content: '""',
      background: `url(${S3_URL}/archetypes/thumb-mys.jpg) 50% 50% no-repeat`,
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '258px',
      height: '674px',
      margin: '-337px 0 0 -140px',
    },
    '&:hover': {
      filter: 'grayscale(0)',
      transform: 'scale(1, 1)',
    },
    '& $archIcon': {
      backgroundPositionY: '-300px',
    },
  },
  thumbAss: {
    '&::before': {
      content: '""',
      background: `url(${S3_URL}/archetypes/thumb-ass.jpg) 50% 50% no-repeat`,
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '258px',
      height: '674px',
      margin: '-337px 0 0 -140px',
    },
    top: '45px',
    '&:hover': {
      filter: 'grayscale(0)',
      transform: 'scale(1, 1)',
    },
    '& $archIcon': {
      backgroundPositionY: '-450px',
    },
  },
  thumbGun: {
    '&::before': {
      content: '""',
      background: `url(${S3_URL}/archetypes/thumb-gun.jpg) 50% 50% no-repeat`,
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '258px',
      height: '674px',
      margin: '-337px 0 0 -140px',
    },
    '&:hover': {
      filter: 'grayscale(0)',
      transform: 'scale(1, 1)',
    },
    '& $archIcon': {
      backgroundPositionY: '-600px',
    },
  },
  archIcon: {
    position: 'relative',
    display: 'block',
    top: '30px',
    width: '106px',
    height: '150px',
    margin: '0 auto',
    background: `url(${S3_URL}/archetypes/arch-icons.png) no-repeat`,
  },
  archTxt: {
    position: 'relative',
    top: '0',
    left: '0',
    fontSize: '1.8rem',
    color: '#ecc594',
    textDecoration: 'none',
  },
  archDesc: {
    position: 'relative',
    textAlign: 'center',
    fontSize: '15px',
    fontWeight: '400',
    lineHeight: '25px',
    color: '#b3b3b3',
    letterSpacing: '-0.05em',
    margin: '2rem 1rem',
  },
};

const Wiki = ({ classes }) => {
  const dispatch = useDispatch();
  const archSkillsList = useSelector(state => state.archSkillsList);
  const { loading, err, archetypes } = archSkillsList;

  useEffect(() => {
    dispatch(listArchSkills());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : err ? (
        <Message variant='danger' children={err.message} />
      ) : (
        archetypes.data && (
          <Container className={classes.wikiContainer}>
            <h1 className='font-weight-bold'>WIKI</h1>
            <Row className={classes.wikiContentsWrapper}>
              <ul className={classes.archList}>
                {[
                  ['thumbWar', 'thumb-war'],
                  ['thumbEle', 'thumb-ele'],
                  ['thumbMys', 'thumb-mys'],
                  ['thumbAss', 'thumb-ass'],
                  ['thumbGun', 'thumb-gun'],
                ].map((el, i) => (
                  <li
                    key={archetypes.data[i].slug}
                    className={`${classes.arch}`}
                  >
                    <Link
                      to={`/wiki/${archetypes.data[i].slug}`}
                      className={`${classes.archLink} ${
                        classes[el[0]]
                      } thumb-link`}
                    >
                      <span className={classes.archIcon}></span>
                      <strong className={classes.archTxt}>
                        {archetypes.data[i].name.toUpperCase()}
                      </strong>
                      <p className={classes.archDesc}>
                        {archetypes.data[i].description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </Row>
            <Row className='my-2 mt-4 justify-content-center flex-nowrap'>
              {['mechanics', 'runestones', 'runetraits', 'sephirots'].map(
                el => (
                  <Col key={el} className='flex-grow-0'>
                    <LinkNextBtn type='link' to={`/wiki/${el}`} val={el} />
                  </Col>
                )
              )}
            </Row>
          </Container>
        )
      )}
    </>
  );
};

export default injectSheet(styles)(Wiki);
