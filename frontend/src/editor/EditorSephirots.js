import React from 'react';

const EditorSephirots = ({
  classes,
  ElyonBE,
  setSephirot,
  handleOverlayOnEnter,
  handleOverlayOnLeave,
  checkedSephirots,
  sephirotPoints,
  clearSephirots,
}) => {
  return (
    <div className={classes.sephirotsWrapper}>
      <span className={classes.sephirotsPoints}>
        Remaining Points: {sephirotPoints}
      </span>
      <button className={classes.clearBtn} onClick={clearSephirots}>
        Clear
      </button>
      <ul className={classes.sephirotGraphTree}>
        {ElyonBE.editorData.sephirotsList.map(sephirot => (
          <li
            key={sephirot.slug}
            className={`${classes.sephirotNode} ${classes[sephirot.slug]} ${
              checkedSephirots[sephirot.beid] && classes.checkedSephNode
            }`}
            onClick={() => setSephirot(sephirot)}
            onMouseEnter={e =>
              handleOverlayOnEnter(e, sephirot, 'sephirotIcon')
            }
            onMouseLeave={handleOverlayOnLeave}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default EditorSephirots;
