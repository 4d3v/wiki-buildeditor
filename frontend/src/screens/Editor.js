import React, { useEffect, useState } from 'react';
import injectSheet from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import useClipboard from 'react-use-clipboard';
import { listEditorData } from '../actions/editorActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import initialStates from '../utils/initialStates';
import BE from '../editor/BE';
import EditorMenu from '../editor/EditorMenu';
import EditorTab from '../editor/EditorTab';
import EditorSkills from '../editor/EditorSkills';
import EditorRunetraits from '../editor/EditorRunetraits';
import SkillDeck from '../components/SkillDeck';
import RunestoneDeck from '../components/RunestoneDeck';
import Desc from '../components/Desc';
import LinkNextBtn from '../components/LinkNextBtn';
import styles from '../styles/EditorStyles';
import EditorSephirots from '../editor/EditorSephirots';
import { CLI_URL } from '../constants/awss3';
import { clearBuildDt } from '../utils/helperFns';

const ElyonBE = new BE();

const Editor = ({
  match,
  classes,
  skillDeckStaticPosX,
  runestonesDeckStaticPosY,
}) => {
  const dispatch = useDispatch(),
    editorList = useSelector(state => state.editorList),
    { loading, editor, err } = editorList;

  const [arch, setArch] = useState(initialStates.archState),
    [tab, setTab] = useState(0),
    [arts, setArts] = useState(initialStates.artifactState),
    [alertOn, setAlertOn] = useState(false),
    [iconTxtOverlay, setIconTxtOverlay] = useState(
      initialStates.iconTxtOverlay
    ),
    [curSkillChecked, setCurSkillChecked] = useState(initialStates.skillState),
    [skillsChecked, setSkillsChecked] = useState({}),
    [curArrowToggled, setCurArrowToggled] = useState(
      initialStates.skArrowState
    ),
    [skillSpanIconTxt, setSkillSpanIconTxt] = useState(
      initialStates.skillSpanIconState
    ),
    [curRunetrait, setCurRunetrait] = useState('equip'),
    [dashCube, setDashCube] = useState(initialStates.dashCubeState),
    [curRuneSlotToggled, setCurRuneSlotToggled] = useState(
      initialStates.runeSlotState
    ),
    [runetraitPoints, setRunetraitPoints] = useState(
      initialStates.runetraitState
    ),
    [runetraitTierChecked, setRunetraitTierChecked] = useState(
      initialStates.runetraitTierCheckedState
    ),
    [checkedRunetraits, setCheckedRunetraits] = useState({}),
    [checkedSephirots, setCheckedSephirots] = useState({}),
    [sephirotPoints, setSephirotPoints] = useState(15),
    [mastersChecked, setMastersChecked] = useState(
      initialStates.mastersCheckedState
    ),
    [buildLink, setBuildLink] = useState('');

  const [isCopied, setCopied] = useClipboard(buildLink, {
    successDuration: 1000,
  });

  useEffect(() => {
    /*
     * |Fix| Case the user visit page without url link
     * Necessary because react is a single static page and
     * Because I'm using ElyonBE.build to display those properties
     */
    if (!match.params.link) {
      clearBuildDt(ElyonBE);
    }
    dispatch(listEditorData());
  }, [dispatch, match]);

  /**
   * @section
   * ! *********************************************************
   * ? ARCHETYPES && TABS                                      *
   * ! *********************************************************
   */
  const handleArchCheck = clickedArch => {
    ElyonBE._setArchetype(clickedArch);

    if (arch[clickedArch])
      setArch(st => ({
        ...st,
        [clickedArch]: !st[clickedArch],
      }));
    else {
      setArch(st => {
        const newArchSt = {};
        for (const x in st) {
          if (x === clickedArch) newArchSt[x] = true;
          else newArchSt[x] = false;
        }
        return newArchSt;
      });
    }

    setSkillsChecked({});
    setCurSkillChecked(st => ({
      ...st,
      slug: '',
      isChecked: false,
      curIdx: -1,
    }));

    // ! If changing archetypes disable boxes
    if (dashCube.isChecked) setDashCube(st => ({ ...st, isChecked: false }));
    if (curRuneSlotToggled.isChecked)
      setCurRuneSlotToggled(st => ({ ...st, isChecked: false }));
  };

  const handleTabClick = e => {
    const { tab } = e.target.dataset;

    // ! If changing tabs disable boxes
    if (curArrowToggled.isChecked)
      setCurArrowToggled(st => ({ ...st, isChecked: false }));
    if (dashCube.isChecked) setDashCube(st => ({ ...st, isChecked: false }));
    if (curRuneSlotToggled.isChecked)
      setCurRuneSlotToggled(st => ({ ...st, isChecked: false }));

    if (tab === 'skills') {
      setTab(0);
    } else if (tab === 'runetraits') {
      setTab(1);
    } else setTab(2);
  };

  const displayAlert = () => {
    setAlertOn(true);
    setTimeout(() => {
      setAlertOn(false);
    }, 3000);
  };

  /**
   * @section
   * ! *********************************************************
   * ? SKILLS                                                  *
   * ! *********************************************************
   */
  const setSkill = (e, skill) => {
    if (skillsChecked[skill.slug]) return;

    if (skill.type.split(' ')[0] === 'runetrait-skill') {
      setSkillsChecked(st => {
        if (ElyonBE.build.skills[12].slug)
          delete st[ElyonBE.build.skills[12].slug];
        return { ...st, [skill.slug]: true };
      });
      ElyonBE.build.skills[12] = skill;
      return;
    }

    setSkillsChecked(st => {
      if (ElyonBE.build.skills[curArrowToggled.curIdx].slug) {
        delete st[ElyonBE.build.skills[curArrowToggled.curIdx].slug];
      }

      return {
        ...st,
        [skill.slug]: true,
      };
    });

    ElyonBE.build.skills[curArrowToggled.curIdx] = skill;

    setIconTxtOverlay({
      isHovered: false,
      type: '',
      curData: {},
    });

    setCurArrowToggled(st => ({ isChecked: !st.isChecked }));
    handleSkillIconClick(curArrowToggled.curIdx);
  };

  const handleArtCheck = el => {
    // Checking for curSkillChecked.curIdx to avoid accessing property when index is -1
    if (curSkillChecked.curIdx >= 0) {
      ElyonBE.build.skills[curSkillChecked.curIdx].artifacts.forEach(
        (art, i) => {
          if (el === i) art.isChecked = !art.isChecked;
          else art.isChecked = false;
        }
      );
    }
    const newArtSt = arts.map((art, i) => (el === i ? !art : false));
    setArts(newArtSt);
  };

  const skillArrowUpHandler = (e, skill, i) => {
    if (!ElyonBE.build.archetype.name) {
      displayAlert();
      return;
    }

    const arrowObj = {
      isChecked: curArrowToggled.isChecked,
      curIdx: i,
      curPos: skillDeckStaticPosX[i],
    };

    if (
      curArrowToggled.curIdx === i ||
      skill === 'iconX' ||
      !curArrowToggled.isChecked
    ) {
      arrowObj.isChecked = !arrowObj.isChecked;
      setCurArrowToggled(arrowObj);
    } else {
      setCurArrowToggled(arrowObj);
    }
  };

  const handleSkillIconClick = i => {
    if (!ElyonBE.build.skills[i].slug) {
      if (i !== 9 && i !== 12 && i !== 13) skillArrowUpHandler('', '', i);
      return;
    }

    setCurArrowToggled({
      isChecked: false,
      curIdx: -1,
      curPos: '0px',
    });

    const hasArtifacts = ElyonBE.build.skills[i].artifacts.length > 0;
    setCurSkillChecked({
      slug: ElyonBE.build.skills[i].slug,
      isChecked: true,
      curIdx: i,
      curArts: ElyonBE.build.skills[i].artifacts,
      hasArtifacts,
    });
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

  const genBuildLink = () => {
    if (!ElyonBE.build.archetype.name) {
      displayAlert();
      return;
    }
    const link = ElyonBE._genLink();
    setBuildLink(`${CLI_URL}/editor/${link}`);
  };

  const handleCopyToClipboardBtn = () => {
    if (!isCopied) setCopied();
    setIconTxtOverlay({
      isHovered: true,
      type: 'tabIcon',
      curData: 'Copied',
    });
  };

  const removeSkill = i => {
    if (!ElyonBE.build.skills[i].slug) return;

    const skillSlug = ElyonBE.build.skills[i].slug;
    setSkillsChecked(st => {
      const newSt = {};
      for (const key in st) if (key !== skillSlug) newSt[key] = true;
      return newSt;
    });

    setCurSkillChecked({
      slug: '',
      isChecked: false,
      curIdx: -1,
      curArts: [],
      hasArtifacts: false,
    });

    ElyonBE.build.skills[i] = {};
  };

  const handleSpanIconTxtOnEnter = i =>
    setSkillSpanIconTxt(st => ({ isHovered: !st.isHovered, idx: i }));

  const handleSpanIconTxtOnLeave = () =>
    setSkillSpanIconTxt(st => ({ isHovered: !st.isHovered, idx: -1 }));

  /**
   * @section
   * ! *********************************************************
   * ? RUNESTONES & RUNETRAITS                                 *
   * ! *********************************************************
   */
  const setRunestones = (e, runestone) => {
    const { skills, runestones } = ElyonBE.build;

    for (const rn of runestones[dashCube.equip]) {
      if (rn) runestones[rn.group] -= rn.amountOfPoints;
    }

    const size = dashCube.equip === 'weapon' ? 5 : 3;
    for (let i = 0; i < size; ++i) {
      runestones[runestone.group] += runestone.amountOfPoints;
      runestones[dashCube.equip][i] = runestone;
    }

    updateRunetraitsVals(runestones);

    if (
      skills[12].slug &&
      64 > runestones[checkedRunetraits[skills[12].type.split(' ')[2]].group]
    ) {
      removeSkill(12);
      setMastersChecked(st => ({ ...st, runetrait: false }));
    }
  };

  const setRunestone = (e, runestone) => {
    const { skills, runestones } = ElyonBE.build;

    if (runestones[curRuneSlotToggled.equipType][curRuneSlotToggled.curIdx]) {
      runestones[curRuneSlotToggled.curSlottedRune] -= Number(
        curRuneSlotToggled.curSlottedRuneVal
      );
    }

    runestones[curRuneSlotToggled.equipType][
      curRuneSlotToggled.curIdx
    ] = runestone;
    runestones[runestone.group] += runestone.amountOfPoints;

    updateRunetraitsVals(runestones);

    if (
      skills[12].slug &&
      64 > runestones[checkedRunetraits[skills[12].type.split(' ')[2]].group]
    ) {
      removeSkill(12);
      setMastersChecked(st => ({ ...st, runetrait: false }));
    }
  };

  const updateRunetraitsVals = runestones => {
    const updatedVals = {
      onslaught: runestones.onslaught,
      control: runestones.control,
      destiny: runestones.destiny,
      support: runestones.support,
      defense: runestones.defense,
      awakening: runestones.awakening,
    };

    setRunetraitPoints(updatedVals);
    if (dashCube.isChecked) setDashCube(st => ({ isChecked: !st.isChecked }));
    if (curRuneSlotToggled.isChecked)
      setCurRuneSlotToggled(st => ({ isChecked: !st.isChecked }));
    setCheckedRunetraits(st => {
      let newSt = {};

      for (const key in st) {
        // * if we remove a runestone and the branch's amount of points is less than
        // * runetraits we have checked in, then remove those runetraits talents
        if (
          checkedRunetraits[key].categoryTier <=
          updatedVals[checkedRunetraits[key].group]
        ) {
          newSt = { ...newSt, [key]: st[key] };
        } else {
          if (st[key].categoryTier === 64)
            setMastersChecked(st => ({ ...st, runetrait: false }));

          setRunetraitTierChecked(oldSt => ({
            ...oldSt,
            [st[key].group]: {
              ...oldSt[st[key].group],
              [st[key].categoryTier]: [0, ''],
            },
          }));

          delete ElyonBE.build.runetraits[key];
        }
      }
      return newSt;
    });
  };

  const removeRunestones = e => {
    const { skills, runestones } = ElyonBE.build;
    for (const rn of runestones[dashCube.equip]) {
      if (rn) runestones[rn.group] -= rn.amountOfPoints;
      runestones[dashCube.equip] = [];
    }
    updateRunetraitsVals(runestones);

    if (
      skills[12].slug &&
      64 > runestones[checkedRunetraits[skills[12].type.split(' ')[2]].group]
    ) {
      removeSkill(12);
      setMastersChecked(st => ({ ...st, runetrait: false }));
    }
  };

  const removeRunestone = e => {
    if (!curRuneSlotToggled.curSlottedRune) return;
    const { skills, runestones } = ElyonBE.build;
    runestones[curRuneSlotToggled.curSlottedRune] -= Number(
      curRuneSlotToggled.curSlottedRuneVal
    );
    runestones[curRuneSlotToggled.equipType][curRuneSlotToggled.curIdx] = null;
    updateRunetraitsVals(runestones);

    if (
      skills[12].slug &&
      64 > runestones[checkedRunetraits[skills[12].type.split(' ')[2]].group]
    ) {
      removeSkill(12);
      setMastersChecked(st => ({ ...st, runetrait: false }));
    }
  };

  const handleDashCubeIconClick = (e, equip, equipIdx) => {
    if (!ElyonBE.build.archetype.name) {
      displayAlert();
      return;
    }

    handleCurRunetoneSlotClick(e, equip, equipIdx, 10);
  };

  const handleCurRunetoneSlotClick = (e, equip, equipIdx, el) => {
    if (!ElyonBE.build.archetype.name) {
      displayAlert();
      return;
    }

    const { slottedrune, slottedruneval } = e.target.dataset;

    const equipObjDashCube = {
      isChecked: dashCube.isChecked,
      equip,
      equipIdx,
      curPos: runestonesDeckStaticPosY[equipIdx],
    };

    const equipObj = {
      isChecked: curRuneSlotToggled.isChecked,
      equipType: equip,
      curEquip: `${equip}${el}`,
      curIdx: el,
      curPos: runestonesDeckStaticPosY[equipIdx],
      curSlottedRune: slottedrune,
      curSlottedRuneVal: slottedruneval,
    };

    if (el === 10) {
      if (equipObj.isChecked)
        setCurRuneSlotToggled(st => ({ ...st, isChecked: false }));

      if (equipObjDashCube.equip === dashCube.equip || !dashCube.isChecked) {
        equipObjDashCube.isChecked = !equipObjDashCube.isChecked;
        setDashCube(equipObjDashCube);
      } else {
        setDashCube(equipObjDashCube);
      }
    } else if (equip === 'iconX') {
      setDashCube(st => ({ ...st, isChecked: false }));
      setCurRuneSlotToggled(st => ({ ...st, isChecked: false }));
    } else {
      if (dashCube.isChecked) setDashCube(st => ({ ...st, isChecked: false }));

      if (
        curRuneSlotToggled.curEquip === `${equip}${el}` ||
        !curRuneSlotToggled.isChecked
      ) {
        equipObj.isChecked = !equipObj.isChecked;
        setCurRuneSlotToggled(equipObj);
      } else {
        setCurRuneSlotToggled(equipObj);
      }
    }
  };

  const handleRunetraitCheck = runetrait => {
    // ! Disable runestone deck when leaving equip tab to any runetraits tab
    if (dashCube.isChecked) setDashCube(st => ({ ...st, isChecked: false }));
    if (curRuneSlotToggled.isChecked)
      setCurRuneSlotToggled(st => ({ ...st, isChecked: false }));

    setCurRunetrait(runetrait);
  };

  const setRunetrait = runetrait => {
    if (!ElyonBE.build.archetype.name) {
      displayAlert();
      return;
    }

    const runGroupsWithUlt = new Set([
      'control',
      'destiny',
      'support',
      'awakening',
    ]);

    if (
      runetraitPoints[runetrait.group] >= runetrait.categoryTier &&
      !runetraitTierChecked[runetrait.group][runetrait.categoryTier][0]
    ) {
      if (runetrait.categoryTier === 64 && mastersChecked.runetrait) return;

      if (runetrait.categoryTier === 64)
        setMastersChecked(st => ({ ...st, runetrait: true }));

      ElyonBE.build.runetraits[runetrait.beid] = String(runetrait.categoryTier);
      setRunetraitTierChecked(st => ({
        ...st,
        [runetrait.group]: {
          ...st[runetrait.group],
          [runetrait.categoryTier]: [1, runetrait.beid],
        },
      }));

      const newRunetraitItem = {
        name: runetrait.name,
        description: runetrait.description,
        slug: runetrait.slug,
        categoryTier: runetrait.categoryTier,
        group: runetrait.group,
      };

      setCheckedRunetraits(st => ({
        ...st,
        [runetrait.beid]: newRunetraitItem,
      }));

      // ! Set ultimate runetrait skill
      if (
        runGroupsWithUlt.has(runetrait.group) &&
        runetrait.categoryTier === 64
      ) {
        setSkill('', ElyonBE.editorData.runetraitsUltSkills[runetrait.slug]);
      }
    } else if (
      runetraitPoints[runetrait.group] >= runetrait.categoryTier &&
      runetraitTierChecked[runetrait.group][runetrait.categoryTier][0]
    ) {
      if (ElyonBE.build.runetraits[runetrait.beid]) {
        if (runetrait.categoryTier === 64) {
          setMastersChecked(st => ({ ...st, runetrait: false }));
          // ! Remove ultimate runetrait skill
          removeSkill(12);
        }

        delete ElyonBE.build.runetraits[runetrait.beid];
        setRunetraitTierChecked(st => ({
          ...st,
          [runetrait.group]: {
            ...st[runetrait.group],
            [runetrait.categoryTier]: [0, ''],
          },
        }));

        setCheckedRunetraits(st => {
          delete st[runetrait.beid];
          return st;
        });
      } else {
        const oldBeid =
          runetraitTierChecked[runetrait.group][runetrait.categoryTier][1];
        delete ElyonBE.build.runetraits[
          runetraitTierChecked[runetrait.group][runetrait.categoryTier][1]
        ];

        setRunetraitTierChecked(st => ({
          ...st,
          [runetrait.group]: {
            ...st[runetrait.group],
            [runetrait.categoryTier]: [1, runetrait.beid],
          },
        }));
        ElyonBE.build.runetraits[runetrait.beid] = String(
          runetrait.categoryTier
        );

        setCheckedRunetraits(st => {
          const newRunetraitItem = {
            name: runetrait.name,
            description: runetrait.description,
            slug: runetrait.slug,
            categoryTier: runetrait.categoryTier,
            group: runetrait.group,
          };
          delete st[oldBeid];
          return { ...st, [runetrait.beid]: newRunetraitItem };
        });

        if (
          runGroupsWithUlt.has(runetrait.group) &&
          runetrait.categoryTier === 64
        ) {
          removeSkill(12);
          setSkill('', ElyonBE.editorData.runetraitsUltSkills[runetrait.slug]);
        }
      }
    }
  };

  /**
   * @section
   * ! *********************************************************
   * ? SEPHIROTS                                               *
   * ! *********************************************************
   */
  const setSephirot = sephirot => {
    if (!ElyonBE.build.archetype.name) {
      displayAlert();
      return;
    }
    const startingSeph =
      checkedSephirots['1'] || checkedSephirots['21'] || checkedSephirots['41'];

    if (!startingSeph && sephirot.sephType === 'starting') {
      ElyonBE.build.sephirots[sephirot.beid] = sephirot;
      setSephirotPoints(st => (st -= 1));
      setCheckedSephirots({ [sephirot.beid]: sephirot });
    } else if (startingSeph && checkedSephirots[sephirot.beid]) {
      if (sephirot.sephType === 'transcendent')
        setMastersChecked(st => ({ ...st, sephirot: false }));

      delete ElyonBE.build.sephirots[sephirot.beid];
      setSephirotPoints(st => (st += 1));
      setCheckedSephirots(st => {
        delete st[sephirot.beid];
        return { ...st };
      });
    } else if (
      startingSeph &&
      !checkedSephirots[sephirot.beid] &&
      sephirotPoints > 0
    ) {
      if (sephirot.sephType === 'transcendent' && mastersChecked.sephirot)
        return;

      if (sephirot.sephType === 'transcendent' && !mastersChecked.sephirot)
        setMastersChecked(st => ({ ...st, sephirot: true }));

      for (const el of sephirot.edges) {
        if (checkedSephirots[el]) {
          ElyonBE.build.sephirots[sephirot.beid] = sephirot;
          setSephirotPoints(st => (st -= 1));
          setCheckedSephirots(st => ({
            ...st,
            [sephirot.beid]: sephirot,
          }));
          break;
        }
      }
    }
  };

  const clearSephirots = () => {
    ElyonBE.build.sephirots = {};
    setSephirotPoints(15);
    setCheckedSephirots({});
    setMastersChecked(st => ({ ...st, sephirot: false }));
  };

  /**
   * @section
   * ! *********************************************************
   * ? API && BUILD EDITOR INSTANCE POPULATION                 *
   * ! *********************************************************
   */
  if (editor.skills && ElyonBE.b) {
    // ? Temp ... needs to structure it better
    ElyonBE._populateData(editor.skills, 'skills');
    ElyonBE._populateData(editor.runestones, 'runestones');
    ElyonBE._populateData(editor.runetraits, 'runetraits');
    ElyonBE._populateData(editor.sephirots, 'sephirots');
    if (match.params.link) {
      ElyonBE._populateBuild(match.params.link);
      setArch(st => ({
        ...st,
        [ElyonBE.build.archetype.slug]: true,
      }));

      const updatedVals = {
        onslaught: ElyonBE.build.runestones.onslaught,
        control: ElyonBE.build.runestones.control,
        destiny: ElyonBE.build.runestones.destiny,
        support: ElyonBE.build.runestones.support,
        defense: ElyonBE.build.runestones.defense,
        awakening: ElyonBE.build.runestones.awakening,
      };
      setRunetraitPoints(updatedVals);
    }

    const { runetraits, sephirots } = ElyonBE.build;

    const onslaught = ElyonBE.editorData.onslaughtRunetraits,
      control = ElyonBE.editorData.controlRunetraits,
      destiny = ElyonBE.editorData.destinyRunetraits,
      support = ElyonBE.editorData.supportRunetraits,
      defense = ElyonBE.editorData.defenseRunetraits,
      awakening = ElyonBE.editorData.awakeningRunetraits,
      newRunetraitSt = JSON.parse(
        JSON.stringify(initialStates.runetraitTierCheckedState)
      ), // !DEEP COPY
      newCheckedRunetraitsSt = {};

    for (const key in runetraits) {
      if (onslaught[ElyonBE._beidRunetraits[key]]) {
        newRunetraitSt.onslaught[runetraits[key]] = [1, key];
        newCheckedRunetraitsSt[key] = onslaught[ElyonBE._beidRunetraits[key]];
      }

      if (control[ElyonBE._beidRunetraits[key]]) {
        newRunetraitSt.control[runetraits[key]] = [1, key];
        newCheckedRunetraitsSt[key] = control[ElyonBE._beidRunetraits[key]];
      }

      if (destiny[ElyonBE._beidRunetraits[key]]) {
        newRunetraitSt.destiny[runetraits[key]] = [1, key];
        newCheckedRunetraitsSt[key] = destiny[ElyonBE._beidRunetraits[key]];
      }

      if (support[ElyonBE._beidRunetraits[key]]) {
        newRunetraitSt.support[runetraits[key]] = [1, key];
        newCheckedRunetraitsSt[key] = support[ElyonBE._beidRunetraits[key]];
      }

      if (defense[ElyonBE._beidRunetraits[key]]) {
        newRunetraitSt.defense[runetraits[key]] = [1, key];
        newCheckedRunetraitsSt[key] = defense[ElyonBE._beidRunetraits[key]];
      }

      if (awakening[ElyonBE._beidRunetraits[key]]) {
        newRunetraitSt.awakening[runetraits[key]] = [1, key];
        newCheckedRunetraitsSt[key] = awakening[ElyonBE._beidRunetraits[key]];
      }
    }

    setRunetraitTierChecked(newRunetraitSt);
    setCheckedRunetraits({ ...newCheckedRunetraitsSt });
    setCheckedSephirots({ ...sephirots });
    setSephirotPoints(st => st - Object.keys(sephirots).length);
    ElyonBE.b = false;

    if (process.env.NODE_ENV !== 'production') console.log(ElyonBE);
  }

  /**
   * @section
   * ! *********************************************************
   * ? REACT RENDER                                            *
   * ! *********************************************************
   */
  return (
    <>
      {loading ? (
        <Loader />
      ) : err ? (
        <Message variant='danger' children={err.message} />
      ) : (
        <div className={classes.container}>
          <aside className={classes.tempAside}>
            <p>
              "Seems some properties on the skills tooltips got removed and a
              new one got added (Max Number of Targets), those changes will come
              later because it requires some changes on the database; Ultimate
              skill `T` will come later; I don't know what `X` is for, as soon
              as I know I'll update it;"
            </p>
          </aside>
          <EditorMenu
            classes={classes}
            arch={arch}
            alertOn={alertOn}
            handleArchCheck={handleArchCheck}
            handleOverlayOnEnter={handleOverlayOnEnter}
            handleOverlayOnLeave={handleOverlayOnLeave}
          />

          <div className={classes.editorBody}>
            <EditorTab
              classes={classes}
              handleOverlayOnEnter={handleOverlayOnEnter}
              handleOverlayOnLeave={handleOverlayOnLeave}
              handleTabClick={handleTabClick}
              tab={tab}
            />

            <div className={classes.bodyContent}>
              {tab === 0 ? (
                <EditorSkills
                  classes={classes}
                  ElyonBE={ElyonBE}
                  curSkillChecked={curSkillChecked}
                  handleArtCheck={handleArtCheck}
                  curArrowToggled={curArrowToggled}
                  skillArrowUpHandler={skillArrowUpHandler}
                  handleSkillIconClick={handleSkillIconClick}
                  handleOverlayOnEnter={handleOverlayOnEnter}
                  handleOverlayOnLeave={handleOverlayOnLeave}
                  removeSkill={removeSkill}
                  handleSpanIconTxtOnEnter={handleSpanIconTxtOnEnter}
                  handleSpanIconTxtOnLeave={handleSpanIconTxtOnLeave}
                  skillSpanIconTxt={skillSpanIconTxt}
                />
              ) : tab === 1 ? (
                <EditorRunetraits
                  classes={classes}
                  ElyonBE={ElyonBE}
                  curRunetrait={curRunetrait}
                  curRuneSlotToggled={curRuneSlotToggled}
                  handleDashCubeIconClick={handleDashCubeIconClick}
                  handleCurRunetoneSlotClick={handleCurRunetoneSlotClick}
                  runetraitPoints={runetraitPoints}
                  handleRunetraitCheck={handleRunetraitCheck}
                  setRunetrait={setRunetrait}
                  checkedRunetraits={checkedRunetraits}
                  handleOverlayOnEnter={handleOverlayOnEnter}
                  handleOverlayOnLeave={handleOverlayOnLeave}
                />
              ) : (
                <EditorSephirots
                  classes={classes}
                  ElyonBE={ElyonBE}
                  setSephirot={setSephirot}
                  handleOverlayOnEnter={handleOverlayOnEnter}
                  handleOverlayOnLeave={handleOverlayOnLeave}
                  checkedSephirots={checkedSephirots}
                  sephirotPoints={sephirotPoints}
                  clearSephirots={clearSephirots}
                />
              )}
            </div>

            {curArrowToggled.isChecked && //*******? Checking if clicked on icon's upper arrow
              ElyonBE.build.archetype.name && ( //*? Have we chosen an archetype ?
                <SkillDeck
                  handleClose={e => skillArrowUpHandler(e, 'iconX')}
                  handleOverlayOnEnter={handleOverlayOnEnter}
                  handleOverlayOnLeave={handleOverlayOnLeave}
                  deckDt={curArrowToggled}
                  skills={ElyonBE.editorData[ElyonBE.build.archetype.skills]}
                  skillsChecked={skillsChecked}
                  archetype={ElyonBE.build.archetype.name}
                  setSkill={setSkill}
                />
              )}

            {(dashCube.isChecked || curRuneSlotToggled.isChecked) &&
              tab === 1 && (
                <RunestoneDeck
                  handleClose={e => handleCurRunetoneSlotClick(e, 'iconX')}
                  deckDt={curRuneSlotToggled}
                  runestones={ElyonBE.editorData.runestonesDeck}
                  setRunestones={setRunestones}
                  setRunestone={setRunestone}
                  removeRunestones={removeRunestones}
                  removeRunestone={removeRunestone}
                  dashCube={dashCube}
                />
              )}

            <Desc
              b={iconTxtOverlay.isHovered}
              type={iconTxtOverlay.type}
              el={iconTxtOverlay.curData}
            />
          </div>

          <div className={classes.qlink}>
            <textarea
              onFocus={e => e.target.select()}
              value={buildLink}
              wrap='soft'
              readOnly
            />
            <div
              className={classes.copyToClipboardBtn}
              onClick={handleCopyToClipboardBtn}
              onMouseEnter={e => handleOverlayOnEnter(e, 'Copy', 'tabIcon')}
              onMouseLeave={handleOverlayOnLeave}
            >
              <i className='far fa-copy'></i>
            </div>
          </div>
          <LinkNextBtn type='btn' val='Generate Link' fn={genBuildLink} />
        </div>
      )}
    </>
  );
};

Editor.defaultProps = {
  skillDeckStaticPosX: [
    '-64px',
    '8px',
    '80px',
    '152px',
    '224px',
    '296px',
    '368px',
    '440px',
    '512px',
    '584px',
    '656px',
    '728px',
    '800px',
    '872px',
  ],

  runestonesDeckStaticPosY: [
    '61px',
    '124px',
    '187px',
    '249px',
    '313px',
    '376px',
    '439px',
  ],

  sephirotsStaticPos: {
    'branch-of-the-chase': { x: '98px', y: '9px' },
    'thrill-of-the-hunt': { x: '98px', y: '115px' },
    'battle-reload': { x: '98px', y: '221px' },
    'seize-the-moment': { x: '98px', y: '274px' },
    'composite-shells': { x: '98px', y: '327px' },
    'shell-of-death': { x: '98px', y: '380px' },
    'shell-arsenal': { x: '98px', y: '433px' },
    'wave-reverse': { x: '98px', y: '485px' },
    scoping: { x: '29px', y: '62px' },
    'heat-of-attack': { x: '29px', y: '168px' },
    'sniper-shots': { x: '29px', y: '272px' },
    'fury-of-the-hunt': { x: '29px', y: '327px' },
    'firing-line': { x: '29px', y: '380px' },
    'fire-from-above': { x: '29px', y: '432px' },
    'weakness-analysis': { x: '166px', y: '61px' },
    'serrated-tips': { x: '166px', y: '168px' },
    'insurance-shots': { x: '166px', y: '221px' },
    'hunting-experience': { x: '166px', y: '327px' },
    'attack-preparation': { x: '166px', y: '433px' },
    ambidexterity: { x: '166px', y: '538px' },

    'branch-of-the-mind': { x: '303px', y: '9px' },
    'mental-focus': { x: '303px', y: '115px' },
    'inquisitive-mind': { x: '303px', y: '221px' },
    'the-veil-of-consciousness': { x: '303px', y: '328px' },
    'speed-of-thought': { x: '303px', y: '379px' },
    'mental-training': { x: '303px', y: '433px' },
    'source-of-consciousness': { x: '303px', y: '538px' },
    'comprehension-of-pain': { x: '235px', y: '62px' },
    'overwhelming-powers': { x: '235px', y: '168px' },
    'patience-of-mind': { x: '235px', y: '221px' },
    'depth-of-mind': { x: '235px', y: '274px' },
    'mental-barrier': { x: '235px', y: '380px' },
    'limit-of-consciousness': { x: '235px', y: '485px' },
    'battle-meditation': { x: '372px', y: '62px' },
    'mental-shield': { x: '372px', y: '168px' },
    'mental-pressure': { x: '372px', y: '221px' },
    'second-thoughts': { x: '372px', y: '278px' },
    'liberation-of-consciousness': { x: '372px', y: '380px' },
    enlightenment: { x: '372px', y: '433px' },
    'conversion-of-consciousness': { x: '372px', y: '485px' },

    'branch-of-dexterity': { x: '509px', y: '9px' },
    'evasive-attack': { x: '509px', y: '115px' },
    'lightning-sprint': { x: '509px', y: '168px' },
    'battle-marathon': { x: '509px', y: '221px' },
    'battle-evasion': { x: '509px', y: '274px' },
    'escape-artist': { x: '509px', y: '380px' },
    'power-of-sprint': { x: '509px', y: '433px' },
    'liberty-of-movement': { x: '509px', y: '485px' },
    'boot-knives': { x: '440px', y: '115px' },
    'runners-luck': { x: '440px', y: '221px' },
    'calculated-evasion': { x: '440px', y: '274px' },
    'sly-twister': { x: '440px', y: '327px' },
    'thunder-evasion': { x: '440px', y: '433px' },
    'liberty-of-spirit': { x: '440px', y: '538px' },
    'sly-dodge': { x: '577px', y: '62px' },
    overconfidence: { x: '577px', y: '168px' },
    balance: { x: '577px', y: '221px' },
    'evasion-and-cloak': { x: '577px', y: '324px' },
    'lightning-marathon': { x: '577px', y: '380px' },
    'liberty-of-flesh': { x: '577px', y: '432px' },
  },

  liBorderColors: {
    equip: 'yellow',
    onslaught: '#ff2626',
    control: 'orange',
    destiny: 'yellow',
    support: '#2fce2f',
    defense: '#3288f7',
    awakening: '#b648d5',
  },
};

export default injectSheet(styles)(Editor);
