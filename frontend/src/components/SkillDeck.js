import React from 'react';
import injectSheet from 'react-jss';
import { Image } from 'react-bootstrap';
import { S3_URL } from '../constants/awss3';
// import Skill from './Skill';
// import SkillDesc from './SkillDesc';

const styles = {
  deckTitle: {
    position: 'absolute',
    top: '2px',
    width: '90.75%',
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
  deckSkillIcon: {
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
  skillChecked: {
    filter: 'grayscale(100%)',
  },
};

const SkillDeck = ({
  classes,
  handleClose,
  deckDt,
  skills,
  skillsChecked,
  archetype,
  setSkill,
  handleOverlayOnEnter,
  handleOverlayOnLeave,
}) => {
  const styles = {
    width: '350px',
    height: '360px',
    padding: '2rem 1rem 1rem 1rem',
    color: '#333',
    borderRadius: '0',
    position: 'absolute',
    top: '143px',
    left: deckDt.curPos,
    zIndex: '999',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#333',
    border: '2px solid #000',
    boxShadow:
      '-1px -1px 3px rgba(255,255,255,0.5), 1px -1px 3px rgba(255,255,255,0.5), 2px 2px 3px rgba(0,0,0,0.4)',
  };

  const displayDeck = () =>
    deckDt.curIdx === 0
      ? skills.map(
          (skill, i) =>
            skill.type.split(' ')[0] === 'tab-skill' && (
              <Image
                key={i}
                src={`${S3_URL}/skills/${skill.archetype.slug}/skills/${skill.slug}-icon.png`}
                alt={skill.name}
                onClick={e => setSkill(e, skill)}
                onMouseEnter={e => handleOverlayOnEnter(e, skill, 'skillIcon')}
                onMouseLeave={handleOverlayOnLeave}
                className={`item-${i} ${classes.deckSkillIcon} ${
                  skillsChecked[skill.slug] && classes.skillChecked
                }`}
                width='60px'
                height='60px'
              />
            )
        )
      : skills.map(
          (skill, i) =>
            skill.type.split(' ')[0] !== 'tab-skill' && (
              <Image
                key={i}
                src={`${S3_URL}/skills/${skill.archetype.slug}/skills/${skill.slug}-icon.png`}
                alt={skill.name}
                onClick={e => setSkill(e, skill)}
                onMouseEnter={e => handleOverlayOnEnter(e, skill, 'skillIcon')}
                onMouseLeave={handleOverlayOnLeave}
                className={`item-${i} ${classes.deckSkillIcon} ${
                  skillsChecked[skill.slug] && classes.skillChecked
                }`}
                width='60px'
                height='60px'
              />
            )
        );

  return (
    <div style={styles}>
      <strong className={classes.deckTitle}>Skill Deck</strong>
      <i
        className={`fas fa-times ${classes.deckXicon}`}
        onClick={handleClose}
      ></i>
      {displayDeck()}
      {/* {skills.map((skill, i) => (
        <Image
          key={i}
          src={`${S3_URL}/skills/${skill.archetype.slug}/skills/${skill.slug}-icon.png`}
          alt={skill.name}
          onClick={e => setSkill(e, skill)}
          onMouseEnter={e => handleOverlayOnEnter(e, skill, 'skillIcon')}
          onMouseLeave={handleOverlayOnLeave}
          className={`item-${i} ${classes.deckSkillIcon} ${
            skillsChecked[skill.slug] && classes.skillChecked
          }`}
          width='60px'
          height='60px'
        />
      ))} */}
      {/* <h1 className='text-center text-light'>|</h1> */}
    </div>
  );
};

export default injectSheet(styles)(SkillDeck);
