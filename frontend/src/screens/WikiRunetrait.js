import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row, Table } from 'react-bootstrap';
import injectSheet from 'react-jss';
import { listRunetraits } from '../actions/archSkillsActions';
import Message from '../components/Message';
import WikiNavigationCard from '../components/WikiNavigationCard';
import RenderTableRowData from '../components/RenderTableRowData';
import Loader from '../components/Loader';
import initialStates from '../utils/initialStates';
import Desc from '../components/Desc';
import { S3_URL } from '../constants/awss3';

const styles = {
  runetraitGroupIcon: {
    background: `url(${S3_URL}/runetraits/runetrait-icon-group.png) no-repeat`,
    width: '50px',
    height: '50px',
    margin: '0 20px',
    filter: 'grayscale(75%)',
    transition: 'all 0.5s',
    cursor: 'pointer',

    '&:hover': {
      filter: 'grayscale(0) drop-shadow(2px 2px 3px #ffe47b)',
    },
  },
  runetraitGroupIconChecked: {
    filter: 'grayscale(0) drop-shadow(3px 3px 5px #ffe47b)',
  },
  runetraitGroupIconOnslaught: {
    backgroundPosition: '-16px -8px',
  },
  runetraitGroupIconControl: {
    backgroundPosition: '-75px -8px',
  },
  runetraitGroupIconDestiny: {
    backgroundPosition: '-135px -8px',
  },
  runetraitGroupIconSupport: {
    backgroundPosition: '-195px -8px',
  },
  runetraitGroupIconDefense: {
    backgroundPosition: '-255px -8px',
  },
  runetraitGroupIconAwakening: {
    backgroundPosition: '-315px -8px',
  },
  checkBtnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2px auto',
    flexWrap: 'nowrap',
  },
};

const WikiRunetrait = ({ classes }) => {
  const dispatch = useDispatch(),
    runetraitList = useSelector(state => state.runetraitList),
    [onslaughtChecked, setOnslaughtChecked] = useState(true),
    [controlChecked, setControlChecked] = useState(false),
    [destinyChecked, setDestinyChecked] = useState(false),
    [supportChecked, setSupportChecked] = useState(false),
    [defenseChecked, setDefenseChecked] = useState(false),
    [awakeningChecked, setAwakeningChecked] = useState(false),
    [iconTxtOverlay, setIconTxtOverlay] = useState(
      initialStates.iconTxtOverlay
    );

  const runetrait = {
      onslaught: [],
      control: [],
      destiny: [],
      support: [],
      defense: [],
      awakening: [],
    },
    { loading, err, runetraits } = runetraitList;

  useEffect(() => {
    dispatch(listRunetraits());
  }, [dispatch]);

  const populateRunetraits = runetraitsData => {
    runetraitsData.forEach(rntrait => runetrait[rntrait.group].push(rntrait));
  };

  const toggleRunetraitIconsOff = () => {
    if (onslaughtChecked) setOnslaughtChecked(false);
    if (controlChecked) setControlChecked(false);
    if (destinyChecked) setDestinyChecked(false);
    if (supportChecked) setSupportChecked(false);
    if (defenseChecked) setDefenseChecked(false);
    if (awakeningChecked) setAwakeningChecked(false);
  };

  const handleClick = e => {
    toggleRunetraitIconsOff();
    const { val } = e.currentTarget.dataset;
    switch (val) {
      case 'onslaught':
        setOnslaughtChecked(!onslaughtChecked);
        break;
      case 'control':
        setControlChecked(!controlChecked);
        break;
      case 'destiny':
        setDestinyChecked(!destinyChecked);
        break;
      case 'support':
        setSupportChecked(!supportChecked);
        break;
      case 'defense':
        setDefenseChecked(!defenseChecked);
        break;
      case 'awakening':
        setAwakeningChecked(!awakeningChecked);
        break;
      default:
        throw new Error(`Error: ${val}`);
    }
  };

  const handleOverlayOnEnter = (e, el, type) => {
    setIconTxtOverlay({
      isHovered: true,
      type,
      curData: el,
    });
  };
  const handleOverlayOnLeave = () => {
    setIconTxtOverlay({
      isHovered: false,
      type: '',
      curData: {},
    });
  };

  const voidPage =
    !onslaughtChecked &&
    !controlChecked &&
    !destinyChecked &&
    !supportChecked &&
    !defenseChecked &&
    !awakeningChecked;

  if (runetraits.data) populateRunetraits(runetraits.data);

  const wikiRunetraitTheadStyles = { backgroundColor: '#e3cdff' },
    wikiRunetraitTheadVoidStyles = { backgroundColor: '#ccc' };

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
              <h1 className='font-weight-bold'>Runetraits</h1>
              <p>
                There are, 6 runetraits groups: Onslaught, Control, Destiny,
                Support, Defense, Awakening. All those groups corresponds
                exactly to the runestones ones, except the void one which
                doesn't give any trait points.
              </p>
              <p>
                The amount of trait points given when a specific runestone is
                slotted is currenlty unknown, but once it's known this paragraph
                will be updated with the corresponding values for each runestone
                tier.
              </p>
            </Col>
            <Col xs={8} sm={4}>
              <WikiNavigationCard />
            </Col>
          </Row>
          <Row className='my-2'>
            <Row className={classes.checkBtnWrapper}>
              {[
                ['onslaught', onslaughtChecked, 'runetraitGroupIconOnslaught'],
                ['control', controlChecked, 'runetraitGroupIconControl'],
                ['destiny', destinyChecked, 'runetraitGroupIconDestiny'],
                ['support', supportChecked, 'runetraitGroupIconSupport'],
                ['defense', defenseChecked, 'runetraitGroupIconDefense'],
                ['awakening', awakeningChecked, 'runetraitGroupIconAwakening'],
              ].map(el => (
                <div
                  key={el[0]}
                  data-val={el[0]}
                  onClick={handleClick}
                  onMouseEnter={e =>
                    handleOverlayOnEnter(e, el[0], 'wikiRSIcon')
                  }
                  onMouseLeave={handleOverlayOnLeave}
                  className={`${classes.runetraitGroupIcon} ${classes[el[2]]} ${
                    el[1] && classes.runetraitGroupIconChecked
                  }`}
                ></div>
              ))}
            </Row>
            <Table responsive hover>
              <thead style={wikiRunetraitTheadStyles}>
                <tr>
                  <th>&nbsp;&nbsp;&nbsp;#</th>
                  <th>Name</th>
                  <th>Tier</th>
                  <th>Description</th>
                </tr>
              </thead>
              {voidPage && (
                <thead style={wikiRunetraitTheadVoidStyles}>
                  <tr>
                    <th>!!!</th>
                    <th>Check Runetrait Icon</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
              )}
              <tbody>
                {runetraits.data &&
                  [
                    ['onslaught', onslaughtChecked],
                    ['control', controlChecked],
                    ['destiny', destinyChecked],
                    ['support', supportChecked],
                    ['defense', defenseChecked],
                    ['awakening', awakeningChecked],
                  ].map(
                    el =>
                      el[1] && (
                        <RenderTableRowData
                          key={el[0]}
                          dataArr={runetrait[el[0]]}
                          strType='runetraits'
                        />
                      )
                  )}
              </tbody>
            </Table>
          </Row>
          <Desc
            b={iconTxtOverlay.isHovered}
            type={iconTxtOverlay.type}
            el={iconTxtOverlay.curData}
          />
        </Container>
      )}
    </>
  );
};

export default injectSheet(styles)(WikiRunetrait);
