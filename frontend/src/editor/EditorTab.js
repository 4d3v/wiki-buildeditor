import React from 'react';

const EditorTab = ({
  classes,
  handleOverlayOnEnter,
  handleOverlayOnLeave,
  handleTabClick,
  tab,
}) => {
  return (
    <div className={classes.bodyTab}>
      <span
        className={`${classes.tabSecSkills} ${tab === 0 && classes.tabChecked}`}
        onMouseEnter={e => handleOverlayOnEnter(e, 'skills', 'tabIcon')}
        onMouseLeave={handleOverlayOnLeave}
        onClick={handleTabClick}
        data-tab='skills'
      ></span>
      <span
        className={`${classes.tabSecRunestones} ${
          tab === 1 && classes.tabChecked
        }`}
        onMouseEnter={e => handleOverlayOnEnter(e, 'runetraits', 'tabIcon')}
        onMouseLeave={handleOverlayOnLeave}
        onClick={handleTabClick}
        data-tab='runetraits'
      ></span>
      <span
        className={`${classes.tabSecSephirots} ${
          tab === 2 && classes.tabChecked
        }`}
        onMouseEnter={e => handleOverlayOnEnter(e, 'sephirots', 'tabIcon')}
        onMouseLeave={handleOverlayOnLeave}
        onClick={handleTabClick}
        data-tab='sephirots'
      ></span>
    </div>
  );
};

export default EditorTab;
