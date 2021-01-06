import React from 'react';
import injectSheet from 'react-jss';
import { S3_URL } from '../constants/awss3';

const styles = {
  deckTitle: {
    position: 'absolute',
    top: '2px',
    width: '83.75%',
    color: '#fff',
    textAlign: 'center',
  },
  deckXicon: {
    position: 'absolute',
    top: '6px',
    right: '6px',
    color: '#fff',
    cursor: 'pointer',

    '&:hover': {
      color: '#01f429',
    },
  },
  deckRunestoneIcon: {
    display: 'inline-block',
    margin: '1px 1px',
    border: '1px solid #000',
    cursor: 'pointer',
    filter: 'grayscale(50%)',

    '&:hover': {
      border: '1px solid #fcfcfc',
      boxShadow:
        '-1px -1px 3px rgba(255,255,255,0.5), 1px -1px 3px rgba(255,255,255,0.5), 2px 2px 3px rgba(0,0,0,0.4)',
      filter: 'grayscale(0)',
    },
  },
  rmvBtnWrapper: {
    width: '100%',
  },
  rmvBtn: {
    display: 'block',
    background: '#272c26',
    color: '#fff',
    outline: '0',
    border: '2px solid #7f9563',
    fontWeight: 'bold',
    margin: '4px auto',

    '&:hover': {
      boxShadow:
        '-1px -1px 3px rgba(255,255,255,0.5), 1px -1px 3px rgba(255,255,255,0.5), 2px 2px 3px rgba(0,0,0,0.4)',
    },
  },
  rndeckul: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '260px',
    height: '200px',
    flexWrap: 'wrap',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    padding: '0rem 1rem 1rem 1rem',
    marginTop: '2rem',
    margin: 0,
  },
  rndeckli: {
    width: '30px',
    height: '30px',
    listStyle: 'none',
    border: '1px solid #fff',
    margin: '1px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',

    '&::before': {
      content: '""',
      width: '30px',
      height: '30px',
      display: 'inline-block',
      background: `rgba(0, 0, 0, 0) url(${S3_URL}/etc/editor-icons.png) no-repeat 0px 0px`,
    },

    '&:hover': {
      border: '1px solid yellow',
    },
  },

  onslaught1: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.onslaught1.x,
      backgroundPositionY: props => props.onslaught1.y,
    },
  },
  onslaught2: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.onslaught2.x,
      backgroundPositionY: props => props.onslaught2.y,
    },
  },
  onslaught3: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.onslaught3.x,
      backgroundPositionY: props => props.onslaught3.y,
    },
  },
  onslaught4: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.onslaught4.x,
      backgroundPositionY: props => props.onslaught4.y,
    },
  },
  onslaught5: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.onslaught5.x,
      backgroundPositionY: props => props.onslaught5.y,
    },
  },
  control1: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.control1.x,
      backgroundPositionY: props => props.control1.y,
    },
  },
  control2: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.control2.x,
      backgroundPositionY: props => props.control2.y,
    },
  },
  control3: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.control3.x,
      backgroundPositionY: props => props.control3.y,
    },
  },
  control4: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.control4.x,
      backgroundPositionY: props => props.control4.y,
    },
  },
  control5: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.control5.x,
      backgroundPositionY: props => props.control5.y,
    },
  },
  destiny1: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.destiny1.x,
      backgroundPositionY: props => props.destiny1.y,
    },
  },
  destiny2: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.destiny2.x,
      backgroundPositionY: props => props.destiny2.y,
    },
  },
  destiny3: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.destiny3.x,
      backgroundPositionY: props => props.destiny3.y,
    },
  },
  destiny4: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.destiny4.x,
      backgroundPositionY: props => props.destiny4.y,
    },
  },
  destiny5: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.destiny5.x,
      backgroundPositionY: props => props.destiny5.y,
    },
  },
  support1: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.support1.x,
      backgroundPositionY: props => props.support1.y,
    },
  },
  support2: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.support2.x,
      backgroundPositionY: props => props.support2.y,
    },
  },
  support3: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.support3.x,
      backgroundPositionY: props => props.support3.y,
    },
  },
  support4: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.support4.x,
      backgroundPositionY: props => props.support4.y,
    },
  },
  support5: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.support5.x,
      backgroundPositionY: props => props.support5.y,
    },
  },
  defense1: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.defense1.x,
      backgroundPositionY: props => props.defense1.y,
    },
  },
  defense2: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.defense2.x,
      backgroundPositionY: props => props.defense2.y,
    },
  },
  defense3: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.defense3.x,
      backgroundPositionY: props => props.defense3.y,
    },
  },
  defense4: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.defense4.x,
      backgroundPositionY: props => props.defense4.y,
    },
  },
  defense5: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.defense5.x,
      backgroundPositionY: props => props.defense5.y,
    },
  },
  awakening1: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.awakening1.x,
      backgroundPositionY: props => props.awakening1.y,
    },
  },
  awakening2: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.awakening2.x,
      backgroundPositionY: props => props.awakening2.y,
    },
  },
  awakening3: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.awakening3.x,
      backgroundPositionY: props => props.awakening3.y,
    },
  },
  awakening4: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.awakening4.x,
      backgroundPositionY: props => props.awakening4.y,
    },
  },
  awakening5: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.awakening5.x,
      backgroundPositionY: props => props.awakening5.y,
    },
  },
  void1: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.void1.x,
      backgroundPositionY: props => props.void1.y,
    },
  },
  void2: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.void2.x,
      backgroundPositionY: props => props.void2.y,
    },
  },
  void3: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.void3.x,
      backgroundPositionY: props => props.void3.y,
    },
  },
  void4: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.void4.x,
      backgroundPositionY: props => props.void4.y,
    },
  },
  void5: {
    '&::before': {
      content: '""',
      backgroundPositionX: props => props.void5.x,
      backgroundPositionY: props => props.void5.y,
    },
  },
};

const RunestoneDeck = ({
  classes,
  handleClose,
  deckDt,
  runestones,
  setRunestones,
  setRunestone,
  removeRunestone,
  removeRunestones,
  dashCube,
}) => {
  const styles = {
    width: '260px',
    height: '232px',
    padding: '2rem 1rem 1rem 1rem',
    color: '#333',
    borderRadius: '0',
    position: 'absolute',
    top: dashCube.isChecked ? dashCube.curPos : deckDt.curPos,
    left: `${
      dashCube.isChecked
        ? '186px'
        : deckDt.equipType !== 'weapon'
        ? '355px'
        : '458px'
    }`,
    zIndex: '9999',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#333',
    border: '2px solid #000',
    boxShadow:
      '-1px -1px 3px rgba(255,255,255,0.5), 1px -1px 3px rgba(255,255,255,0.5), 2px 2px 3px rgba(0,0,0,0.4)',
  };

  // ! Its gonna be comming sorted from api
  const temporarySort = () => {
    const _ = [[], [], [], [], [], [], []];

    runestones.forEach(runestone => {
      if (runestone.group === 'onslaught') _[0].push(runestone);
      else if (runestone.group === 'control') _[1].push(runestone);
      else if (runestone.group === 'destiny') _[2].push(runestone);
      else if (runestone.group === 'support') _[3].push(runestone);
      else if (runestone.group === 'defense') _[4].push(runestone);
      else if (runestone.group === 'awakening') _[5].push(runestone);
      else _[6].push(runestone);
    });

    return [..._[0], ..._[1], ..._[2], ..._[3], ..._[4], ..._[5], ..._[6]];
  };

  return (
    <div style={styles}>
      <strong className={classes.deckTitle}>Runestone Deck</strong>
      <i
        className={`fas fa-times ${classes.deckXicon}`}
        onClick={handleClose}
      ></i>
      <ul className={classes.rndeckul}>
        {/* {runestones.map((runestone, i) => ( */}
        {temporarySort().map((runestone, i) => (
          <li
            key={i}
            className={`${classes.rndeckli} ${classes[runestone.slug]}`}
            onClick={e =>
              dashCube.isChecked
                ? setRunestones(e, runestone)
                : setRunestone(e, runestone)
            }
          ></li>
          // <Image
          //   key={i}
          //   src={`${S3_URL}/runestones/${runestone.slug}.png`}
          //   alt={runestone.slug}
          //   onClick={e =>
          //     dashCube.isChecked
          //       ? setRunestones(e, runestone)
          //       : setRunestone(e, runestone)
          //   }
          //   className={`item-${i} ${classes.deckRunestoneIcon}`}
          //   width='30px'
          //   height='30px'
          // />
        ))}
        <div className={classes.rmvBtnWrapper}>
          <button
            className={classes.rmvBtn}
            onClick={e =>
              dashCube.isChecked ? removeRunestones(e) : removeRunestone(e)
            }
          >
            {dashCube.isChecked ? 'Remove Row' : 'Remove'}
          </button>
        </div>
      </ul>
      {/* <h1 className='text-center text-light'>|</h1> */}
    </div>
  );
};

RunestoneDeck.defaultProps = {
  onslaught1: { x: '-570px', y: '-140px' },
  onslaught2: { x: '-597px', y: '-140px' },
  onslaught3: { x: '-627px', y: '-140px' },
  onslaught4: { x: '-664px', y: '-140px' },
  onslaught5: { x: '-700px', y: '-140px' },
  control1: { x: '-570px', y: '-173px' },
  control2: { x: '-597px', y: '-173px' },
  control3: { x: '-627px', y: '-173px' },
  control4: { x: '-664px', y: '-173px' },
  control5: { x: '-700px', y: '-173px' },
  destiny1: { x: '-570px', y: '-206px' },
  destiny2: { x: '-597px', y: '-206px' },
  destiny3: { x: '-627px', y: '-206px' },
  destiny4: { x: '-664px', y: '-206px' },
  destiny5: { x: '-700px', y: '-206px' },
  support1: { x: '-570px', y: '-241px' },
  support2: { x: '-597px', y: '-241px' },
  support3: { x: '-627px', y: '-241px' },
  support4: { x: '-664px', y: '-241px' },
  support5: { x: '-700px', y: '-241px' },
  defense1: { x: '-570px', y: '-273px' },
  defense2: { x: '-597px', y: '-273px' },
  defense3: { x: '-627px', y: '-273px' },
  defense4: { x: '-664px', y: '-273px' },
  defense5: { x: '-700px', y: '-273px' },
  awakening1: { x: '-570px', y: '-304px' },
  awakening2: { x: '-597px', y: '-304px' },
  awakening3: { x: '-627px', y: '-304px' },
  awakening4: { x: '-664px', y: '-304px' },
  awakening5: { x: '-700px', y: '-304px' },
  void1: { x: '-570px', y: '-337px' },
  void2: { x: '-597px', y: '-337px' },
  void3: { x: '-627px', y: '-337px' },
  void4: { x: '-664px', y: '-337px' },
  void5: { x: '-700px', y: '-337px' },
};

export default injectSheet(styles)(RunestoneDeck);
