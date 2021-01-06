import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row, Table } from 'react-bootstrap';
import injectSheet from 'react-jss';
import { listSephirots } from '../actions/archSkillsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import WikiNavigationCard from '../components/WikiNavigationCard';
import RenderTableRowData from '../components/RenderTableRowData';
import initialStates from '../utils/initialStates';
import Desc from '../components/Desc';
import { S3_URL } from '../constants/awss3';

const styles = {
  sephirotBranchIcon: {
    width: '32px',
    height: '32px',
    margin: '0 15px',
    filter: 'grayscale(75%)',
    transition: 'all 0.5s',
    cursor: 'pointer',

    '&:hover': {
      filter: 'grayscale(0) drop-shadow(2px 2px 3px #ffe47b)',
    },
  },
  sephirotBranchIconChecked: {
    filter: 'grayscale(0) drop-shadow(3px 3px 5px #ffe47b)',
  },
  sephirotBranchIconHunt: {
    background: `url(${S3_URL}/sephirots/sephirot-icon-group.png) no-repeat orange`,
    border: '1px solid orange',
    borderRadius: '50%',
    backgroundPosition: '-13px -7px',
  },
  sephirotBranchIconMind: {
    background: `url(${S3_URL}/sephirots/sephirot-icon-group.png) no-repeat #5a40d9`,
    border: '1px solid #5a40d9',
    borderRadius: '50%',
    backgroundPosition: '-53px -7px',
  },
  sephirotBranchIconCunning: {
    background: `url(${S3_URL}/sephirots/sephirot-icon-group.png) no-repeat yellow`,
    border: '1px solid yellow',
    borderRadius: '50%',
    backgroundPosition: '-93px -7px',
  },
  checkBtnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2px auto',
    flexWrap: 'nowrap',
  },
};

const WikiSephirot = ({ classes }) => {
  const dispatch = useDispatch();
  const sephirotList = useSelector(state => state.sephirotList),
    [huntChecked, setHuntChecked] = useState(true),
    [mindChecked, setMindChecked] = useState(false),
    [cunningChecked, setCunningChecked] = useState(false),
    [iconTxtOverlay, setIconTxtOverlay] = useState(
      initialStates.iconTxtOverlay
    );

  const sephs = { hunt: [], mind: [], cunning: [] },
    { loading, err, sephirots } = sephirotList;

  useEffect(() => {
    dispatch(listSephirots());
  }, [dispatch]);

  const populateSephirots = sephirotData => {
    sephirotData.forEach(seph => sephs[seph.branch].push(seph));
  };

  const toggleRunetraitIconsOff = () => {
    if (huntChecked) setHuntChecked(false);
    if (mindChecked) setMindChecked(false);
    if (cunningChecked) setCunningChecked(false);
  };

  const handleClick = e => {
    toggleRunetraitIconsOff();
    const { val } = e.currentTarget.dataset;
    switch (val) {
      case 'hunt':
        setHuntChecked(!huntChecked);
        break;
      case 'mind':
        setMindChecked(!mindChecked);
        break;
      case 'cunning':
        setCunningChecked(!cunningChecked);
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

  const voidPage = !huntChecked && !mindChecked && !cunningChecked;

  if (sephirots.data) populateSephirots(sephirots.data);

  const wikiSephirotTheadStyles = { backgroundColor: '#e3cdff' },
    wikiSephirotTheadVoidStyles = { backgroundColor: '#ccc' };

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
              <h1 className='font-weight-bold'>Sephirots</h1>
              <p>
                There are a total of 3 branches of sephirot: <span>Hunt</span>,{' '}
                <span>Mind</span> and <span>Cunning</span>.
              </p>
              <p>Sephirot's nodes are divided into 4 categories:</p>
              <ul>
                <li>
                  Starting: There are 3 starting talents, you can activate one
                  of them across all three branches.
                </li>
                <li>
                  Minor: These talents are represented by small white dots on
                  the lines.
                </li>
                <li>
                  Major: These talents are represented by round icons between
                  the lines.
                </li>
                <li>
                  Transcendent: Final talents on the top of each branch. There
                  are a total 9 transcendent talents, 3 per branch.
                </li>
              </ul>
            </Col>
            <Col xs={8} sm={4}>
              <WikiNavigationCard />
            </Col>
          </Row>
          <div className='my-2'>
            <Row className={classes.checkBtnWrapper}>
              {[
                ['hunt', huntChecked, 'sephirotBranchIconHunt'],
                ['mind', mindChecked, 'sephirotBranchIconMind'],
                ['cunning', cunningChecked, 'sephirotBranchIconCunning'],
              ].map(el => (
                <div
                  key={el[0]}
                  value={el[0]}
                  data-val={el[0]}
                  onClick={handleClick}
                  onMouseEnter={e =>
                    handleOverlayOnEnter(e, el[0], 'wikiRSIcon')
                  }
                  onMouseLeave={handleOverlayOnLeave}
                  className={`${classes.sephirotBranchIcon} ${classes[el[2]]} ${
                    el[1] && classes.sephirotBranchIconChecked
                  }`}
                ></div>
              ))}
            </Row>
            <Table responsive striped hover>
              <thead style={wikiSephirotTheadStyles}>
                <tr>
                  <th>&nbsp;&nbsp;&nbsp;#</th>
                  <th>Branch / Type</th>
                  <th>Name</th>
                  <th>Details</th>
                </tr>
              </thead>
              {voidPage && (
                <thead style={wikiSephirotTheadVoidStyles}>
                  <tr>
                    <th>!!!</th>
                    <th>Check Sephirot Icon</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
              )}
              <tbody>
                {sephirots.data &&
                  [
                    ['hunt', huntChecked],
                    ['mind', mindChecked],
                    ['cunning', cunningChecked],
                  ].map(
                    el =>
                      el[1] && (
                        <RenderTableRowData
                          key={el[0]}
                          dataArr={sephs[el[0]]}
                          strType='sephirots'
                        />
                      )
                  )}
              </tbody>
            </Table>
          </div>
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

export default injectSheet(styles)(WikiSephirot);
