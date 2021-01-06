import React from 'react';
import AlertPopup from '../components/AlertPopup';

const EditorMenu = ({
  classes,
  arch,
  alertOn,
  handleArchCheck,
  handleOverlayOnEnter,
  handleOverlayOnLeave,
}) => {
  return (
    <div className={classes.editorMenu}>
      <div className={classes.menuSecArchs}>
        <h4 className={classes.menuTitle}>CLASSES</h4>
        <div className={classes.menuDesc}>
          {alertOn && <AlertPopup text='Choose a class first 👉' />}
          <ul>
            {[
              ['warlord', 'warBG'],
              ['elementalist', 'eleBG'],
              ['mystic', 'mysBG'],
              ['assassin', 'assBG'],
              ['gunslinger', 'gunBG'],
            ].map(el => (
              <li
                key={el[0]}
                className={`${classes[el[1]]} ${
                  arch[el[0]] && classes.archChecked
                }`}
                onClick={() => handleArchCheck(el[0])}
                onMouseEnter={e => handleOverlayOnEnter(e, el[0], 'archIcon')}
                onMouseLeave={handleOverlayOnLeave}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditorMenu;
