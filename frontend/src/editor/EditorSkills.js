import React from 'react';
import { S3_URL } from '../constants/awss3';
import EditorArt from './EditorArt';

const EditorSkills = ({
  classes,
  ElyonBE,
  curSkillChecked,
  handleArtCheck,
  curArrowToggled,
  skillArrowUpHandler,
  handleSkillIconClick,
  handleOverlayOnEnter,
  handleOverlayOnLeave,
  removeSkill,
  handleSpanIconTxtOnEnter,
  handleSpanIconTxtOnLeave,
  skillSpanIconTxt,
}) => {
  const renderSkillIconSpan = i => {
    if (skillSpanIconTxt.isHovered && skillSpanIconTxt.idx === i)
      return (
        <i
          className={`${classes.skillSpanIconTxt} far fa-trash-alt fa-lg text-center`}
        ></i>
      );
    if (i === 0) return 'TAB';
    else if (i === 6) return 'Q';
    else if (i === 7) return 'E';
    else if (i === 8) return 'R';
    else if (i === 9) return 'T';
    else if (i === 10) return 'LB';
    else if (i === 11) return 'RB';
    else if (i === 12) return 'Z';
    else if (i === 13) return 'X';
    else return i;
  };

  return (
    <>
      <div className={classes.artsWrapper}>
        {[0, 1, 2, 3].map(el => (
          <EditorArt
            key={el}
            el={el}
            handleArtCheck={handleArtCheck}
            handleOverlayOnEnter={handleOverlayOnEnter}
            handleOverlayOnLeave={handleOverlayOnLeave}
            isChecked={
              curSkillChecked.curIdx >= 0 &&
              ElyonBE.build.skills[curSkillChecked.curIdx].artifacts.length > 0
                ? ElyonBE.build.skills[curSkillChecked.curIdx].artifacts[el]
                    .isChecked
                : false
            }
            curSkillChecked={curSkillChecked}
            archetypeSlug={ElyonBE.build.archetype.slug}
          />
        ))}
      </div>
      <div className={classes.skillsWrapper}>
        <ul className={classes.skillsUl}>
          {ElyonBE.build.skills.map((skill, i) => (
            <li key={i} className={classes.skillLi}>
              {i === 9 || i === 12 || i === 13 ? (
                <i className='text-right p-1'></i>
              ) : (
                <i
                  className={`fas fa-sort-${
                    curArrowToggled.isChecked && i === curArrowToggled.curIdx
                      ? `down ${classes.arrowIconDown}`
                      : 'up'
                  } text-right p-1`}
                  onClick={e => skillArrowUpHandler(e, skill.name, i)}
                ></i>
              )}
              <img
                src={
                  ElyonBE.build.archetype.name && ElyonBE.build.skills[i].slug
                    ? `${S3_URL}/skills/${
                        i === 9 || i === 12 || i === 13
                          ? 'misc'
                          : ElyonBE.build.archetype.slug
                      }/skills/${skill.slug}-icon.png`
                    : i === 9 || i === 12 || i === 13
                    ? `${S3_URL}/skills/default-skill-lock-icon.png`
                    : `${S3_URL}/skills/default-skill-icon.png`
                }
                alt={skill.name}
                className={classes.skill}
                onClick={() => handleSkillIconClick(i)}
                onMouseEnter={e => handleOverlayOnEnter(e, skill, 'skillIcon')}
                onMouseLeave={handleOverlayOnLeave}
              />
              <span
                className={classes.skillIconSpan}
                onClick={() => removeSkill(i)}
                onMouseEnter={() => handleSpanIconTxtOnEnter(i)}
                onMouseLeave={handleSpanIconTxtOnLeave}
              >
                {renderSkillIconSpan(i)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EditorSkills;
