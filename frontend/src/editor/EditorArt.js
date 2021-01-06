import React from 'react';
import injectSheet from 'react-jss';
import IconDmgTpOrMechanic from '../components/IconDmgTpOrMechanic';
import { S3_URL } from '../constants/awss3';
import styles from '../styles/EditorArtStyles';

const EditorArt = ({
  classes,
  el,
  handleArtCheck,
  handleOverlayOnEnter,
  handleOverlayOnLeave,
  isChecked,
  curSkillChecked,
  archetypeSlug,
}) => {
  const handleClick = () => handleArtCheck(el);

  const simpleRngKey = idx => `${Math.random() * 50}-${idx}`;

  const { curArts } = curSkillChecked;

  return (
    <div
      className={`${classes.artContainer} ${
        isChecked && classes.checked
      } artifactscroll`}
      onClick={handleClick}
    >
      <div
        className={`${classes.artHeader} d-flex align-items-center justify-content-between`}
      >
        {curSkillChecked.isChecked && curSkillChecked.hasArtifacts ? (
          <>
            <h4 className={`${classes.artH4Title} pr-2 text-uppercase`}>
              {curArts[el].name}
            </h4>
            <IconDmgTpOrMechanic
              handleOverlayOnEnter={handleOverlayOnEnter}
              handleOverlayOnLeave={handleOverlayOnLeave}
              dmgtype={curArts[el].dmgtype}
            />
          </>
        ) : (
          <h4 className={`${classes.artH4Title} pr-2 text-uppercase`}>
            No Artifacts
          </h4>
        )}
      </div>
      <div className={classes.artBody}>
        {curSkillChecked.isChecked && curSkillChecked.hasArtifacts && (
          <>
            <p className={classes.artStats}>
              <i className='fas fa-life-ring'></i>&nbsp;
              <span className={classes.artSpanProp}>Grade: </span>
              {curArts[el].grade}
            </p>
            <p className={classes.artStats}>
              <i className='fas fa-circle-notch'></i>&nbsp;
              <span className={classes.artSpanProp}>Artifact Power: </span>
              {curArts[el].artifactPower}
            </p>
            <p className={classes.artStats}>
              <i className='fas fa-quote-left fa-fw'></i>&nbsp;
              <span className={classes.artSpanProp}>Details </span>
            </p>
            <ul className={classes.artDetails}>
              {curArts[el].details.map((dt, i) => (
                <li key={simpleRngKey(i)} className={classes.artDtItem}>
                  {dt}
                </li>
              ))}
            </ul>
            <div>
              <i className='fas fa-quote-left fa-fw'></i>&nbsp;
              <span className={`${classes.artSpanProp} mr-1`}>Mechanics</span>
              <div className={classes.artMechWrapper}>
                <IconDmgTpOrMechanic
                  handleOverlayOnEnter={handleOverlayOnEnter}
                  handleOverlayOnLeave={handleOverlayOnLeave}
                  mechanics={curArts[el].mechanics}
                />
              </div>
            </div>
            <div className={classes.artImgGifWrapper}>
              <img
                src={`${S3_URL}/skills/${archetypeSlug}/artifacts/${curSkillChecked.slug}-art${el}.gif`}
                alt={curArts[el].name}
                className={classes.artImgGif}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default injectSheet(styles)(EditorArt);
