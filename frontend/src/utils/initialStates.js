export default {
  archState: {
    warlord: false,
    elementalist: false,
    mystic: false,
    assassin: false,
    gunslinger: false,
  },
  artifactState: [false, false, false, false],
  iconTxtOverlay: {
    isHovered: false,
    type: '',
    curData: {} | '',
  },
  skillState: {
    slug: '',
    isChecked: false,
    curIdx: -1,
    curArts: [],
    hasArtifacts: false,
  },
  skArrowState: {
    isChecked: false,
    curIdx: -1,
    curPos: '0px',
  },
  skillSpanIconState: {
    isHovered: false,
    idx: -1,
  },
  dashCubeState: {
    isChecked: false,
    equip: '',
    equipIdx: -1,
    curPos: '',
  },
  runeSlotState: {
    isChecked: false,
    equipType: '',
    curEquip: '',
    curIdx: -1,
    curPos: '0px',
    curSlottedRune: undefined,
    curSlottedRuneVal: undefined,
  },
  runetraitState: {
    onslaught: 0,
    control: 0,
    destiny: 0,
    support: 0,
    defense: 0,
    awakening: 0,
  },
  runetraitTierCheckedState: {
    onslaught: {
      4: [0, ''],
      8: [0, ''],
      16: [0, ''],
      28: [0, ''],
      44: [0, ''],
      64: [0, ''],
    },
    control: {
      4: [0, ''],
      8: [0, ''],
      16: [0, ''],
      28: [0, ''],
      44: [0, ''],
      64: [0, ''],
    },
    destiny: {
      4: [0, ''],
      8: [0, ''],
      16: [0, ''],
      28: [0, ''],
      44: [0, ''],
      64: [0, ''],
    },
    support: {
      4: [0, ''],
      8: [0, ''],
      16: [0, ''],
      28: [0, ''],
      44: [0, ''],
      64: [0, ''],
    },
    defense: {
      4: [0, ''],
      8: [0, ''],
      16: [0, ''],
      28: [0, ''],
      44: [0, ''],
      64: [0, ''],
    },
    awakening: {
      4: [0, ''],
      8: [0, ''],
      16: [0, ''],
      28: [0, ''],
      44: [0, ''],
      64: [0, ''],
    },
  },
  mastersCheckedState: {
    runetrait: false,
    sephirot: false,
  },
};
