import React from 'react';
import { S3_URL } from '../constants/awss3';

const EditorRunetraits = ({
  classes,
  ElyonBE,
  curRunetrait,
  curRuneSlotToggled,
  handleCurRunetoneSlotClick,
  runetraitPoints,
  handleRunetraitCheck,
  setRunetrait,
  checkedRunetraits,
  handleOverlayOnEnter,
  handleOverlayOnLeave,
  handleDashCubeIconClick,
}) => {
  const checkedRunetraitsArr = Object.keys(checkedRunetraits).map(
    key => checkedRunetraits[key]
  );

  const renderRunetraitItems = (
    group,
    runetraitClass,
    runetraitClassChecked,
    categoryTier
  ) => {
    return ElyonBE.editorData.runetraitsDeck[group].map(
      runetrait =>
        runetrait.categoryTier === categoryTier && (
          <div
            key={runetrait.slug}
            className={`${classes.runetraitsTalent} ${
              ElyonBE.build.runetraits[runetrait.beid] &&
              classes.runetraitsTalentChecked
            }`}
            onClick={() => setRunetrait(runetrait)}
            onMouseEnter={e =>
              handleOverlayOnEnter(e, runetrait, 'runetraitIcon')
            }
            onMouseLeave={handleOverlayOnLeave}
          >
            <img
              src={`${S3_URL}/runetraits/${runetrait.slug}-icon.png`}
              alt={runetrait.name}
              className={classes.runetraitsTalentImg}
            />
            {ElyonBE.build.runetraits[runetrait.beid] && (
              <>
                <div
                  className={`${classes.runetraitsSpinner} ${classes.borderLeft} ${classes[runetraitClassChecked]}`}
                ></div>
                <div
                  className={`${classes.runetraitsSpinner} ${classes.borderMiddle} ${classes[runetraitClassChecked]}`}
                ></div>
                <div
                  className={`${classes.runetraitsSpinner} ${classes.borderRight} ${classes[runetraitClassChecked]}`}
                ></div>
              </>
            )}
          </div>
        )
    );
  };

  const renderRunetraits = (group, runetraitClass, runetraitClassChecked) => (
    <div className={classes.runetraitsSecBody}>
      {[4, 8, 16, 28, 44, 64].map(categoryTier => (
        <div
          key={categoryTier}
          className={`${classes.runetraitsTiers} ${classes[runetraitClass]}`}
        >
          <div className={classes.runetraitsIconTier}>
            <span>{categoryTier}</span>
          </div>
          {renderRunetraitItems(
            group,
            runetraitClass,
            runetraitClassChecked,
            categoryTier
          )}
        </div>
      ))}
    </div>
  );

  const renderEquipSlots = (equip, equipIdx) =>
    equip !== 'weapon' ? (
      <ul className={classes.runetraitsSlots}>
        {[0, 1, 2].map(el => (
          <li
            key={el}
            className={`
            ${classes.runetraitSlot} ${
              equip === curRuneSlotToggled.equipType &&
              el === curRuneSlotToggled.curIdx &&
              curRuneSlotToggled.isChecked &&
              classes.runetraitSlotChecked
            }
            `}
            onClick={e => handleCurRunetoneSlotClick(e, equip, equipIdx, el)}
          >
            {ElyonBE.build.runestones[equip][el] && (
              <img
                src={`${S3_URL}/runestones/${ElyonBE.build.runestones[equip][el].slug}.png`}
                height='40px'
                alt={ElyonBE.build.runestones[equip][el].slug}
                data-slottedrune={ElyonBE.build.runestones[equip][el].group}
                data-slottedruneval={
                  ElyonBE.build.runestones[equip][el].amountOfPoints
                }
              />
            )}
          </li>
        ))}
      </ul>
    ) : (
      <ul className={classes.runetraitsSlots}>
        {[0, 1, 2, 3, 4].map(el => (
          <li
            key={el}
            className={`
            ${classes.runetraitSlot} ${
              equip === curRuneSlotToggled.equipType &&
              el === curRuneSlotToggled.curIdx &&
              curRuneSlotToggled.isChecked &&
              classes.runetraitSlotChecked
            }
            `}
            onClick={e => handleCurRunetoneSlotClick(e, equip, equipIdx, el)}
          >
            {ElyonBE.build.runestones[equip][el] && (
              <img
                src={`${S3_URL}/runestones/${ElyonBE.build.runestones[equip][el].slug}.png`}
                height='40px'
                alt={ElyonBE.build.runestones[equip][el].slug}
                data-slottedrune={ElyonBE.build.runestones[equip][el].group}
                data-slottedruneval={
                  ElyonBE.build.runestones[equip][el].amountOfPoints
                }
              />
            )}
          </li>
        ))}
      </ul>
    );

  const renderEquips = () => (
    <div className={classes.runetraitsSecBody}>
      {['helmet', 'chest', 'pants', 'boots', 'gloves', 'greaves', 'weapon'].map(
        (equip, equipIdx) => (
          <div key={equip} className={classes.runetraitsEquips}>
            <i
              className={`${classes.runetraitsEquipBtn} fab fa-dashcube fa-lg`}
              onClick={e => handleDashCubeIconClick(e, equip, equipIdx)}
            ></i>
            <span
              className={`${classes.runetraitsEquipType} ${classes[equip]}`}
            ></span>
            {renderEquipSlots(equip, equipIdx)}
          </div>
        )
      )}
    </div>
  );

  return (
    <div className={classes.runetraitsWrapper}>
      <div className={classes.runetraitsLeftCol}>
        <ul className={classes.runetraitsUl}>
          {[
            ['equip', 'equipChecked'],
            ['onslaught', 'onslaughtChecked'],
            ['control', 'controlChecked'],
            ['destiny', 'destinyChecked'],
            ['support', 'supportChecked'],
            ['defense', 'defenseChecked'],
            ['awakening', 'awakeningChecked'],
          ].map(runetrait => (
            <li
              key={runetrait[0]}
              className={`${classes.runetraitsLi} ${classes[runetrait[0]]} ${
                curRunetrait === runetrait[0] && classes[runetrait[1]]
              }`}
              onClick={() => handleRunetraitCheck(runetrait[0])}
            >
              <span>{runetrait[0]}</span>
              <span className={classes.runetraitsSpanAmount}>
                {runetraitPoints[runetrait[0]]}
              </span>
            </li>
          ))}
        </ul>

        {curRunetrait === 'equip'
          ? renderEquips()
          : curRunetrait === 'onslaught'
          ? renderRunetraits(
              'onslaught',
              'RunetraitOnslaught',
              'runetraitsOnslaughtChecked'
            )
          : curRunetrait === 'control'
          ? renderRunetraits(
              'control',
              'RunetraitControl',
              'runetraitsControlChecked'
            )
          : curRunetrait === 'destiny'
          ? renderRunetraits(
              'destiny',
              'RunetraitDestiny',
              'runetraitsDestinyChecked'
            )
          : curRunetrait === 'support'
          ? renderRunetraits(
              'support',
              'RunetraitSupport',
              'runetraitsSupportChecked'
            )
          : curRunetrait === 'defense'
          ? renderRunetraits(
              'defense',
              'RunetraitDefense',
              'runetraitsDefenseChecked'
            )
          : renderRunetraits(
              'awakening',
              'RunetraitAwakening',
              'runetraitsAwakeningChecked'
            )}
      </div>
      <div className={classes.runetraitsRightCol}>
        {checkedRunetraitsArr.length &&
          checkedRunetraitsArr.map(el => (
            <div className={classes.runetraitsRCItem} key={el.slug}>
              <img
                src={`${S3_URL}/runetraits/${el.slug}-icon.png`}
                alt={el.name}
                className={classes.runetraitsRCImg}
              />
              <div className={classes.runetraitsRCTxtWrapper}>
                <h4 className={classes.runetraitsRCName}>{el.name}</h4>
                <p className={classes.runetraitsRCDesc}>{el.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EditorRunetraits;
