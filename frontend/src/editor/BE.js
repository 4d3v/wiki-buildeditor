export default class {
  /**
   * ! To avoid repopulating data into ElyonBE
   */ b = true;

  build = {
    archetype: {},
    skills: new Array(14).fill({}),
    runestones: {
      onslaught: 0,
      control: 0,
      destiny: 0,
      support: 0,
      defense: 0,
      awakening: 0,
      helmet: [],
      chest: [],
      pants: [],
      boots: [],
      gloves: [],
      greaves: [],
      weapon: [],
    },
    runetraits: {},
    sephirots: {},
  };

  _beidArchetypes = {};
  _beidSkills = {};
  _beidRunestones = {};
  _beidRunetraits = {};
  _beidSephirots = {};
  _beidEquip = {
    helmet: '1',
    chest: '2',
    pants: '3',
    boots: '4',
    gloves: '5',
    greaves: '6',
    weapon: '7',
    1: 'helmet',
    2: 'chest',
    3: 'pants',
    4: 'boots',
    5: 'gloves',
    6: 'greaves',
    7: 'weapon',
  };

  editorData = {
    archSks: [
      { arch: 'warlord', skills: 'warSkillsDeck', skillsObj: 'warSkills' },
      { arch: 'elementalist', skills: 'eleSkillsDeck', skillsObj: 'eleSkills' },
      { arch: 'mystic', skills: 'mysSkillsDeck', skillsObj: 'mysSkills' },
      { arch: 'assassin', skills: 'assSkillsDeck', skillsObj: 'assSkills' },
      { arch: 'gunslinger', skills: 'gunSkillsDeck', skillsObj: 'gunSkills' },
    ],
    warSkills: {},
    warSkillsDeck: [],
    eleSkills: {},
    eleSkillsDeck: [],
    mysSkills: {},
    mysSkillsDeck: [],
    assSkills: {},
    assSkillsDeck: [],
    gunSkills: {},
    gunSkillsDeck: [],
    runestonesDeck: [],
    runestones: {},
    runetraitsDeck: {
      onslaught: [],
      control: [],
      destiny: [],
      support: [],
      defense: [],
      awakening: [],
    },
    onslaughtRunetraits: {},
    controlRunetraits: {},
    destinyRunetraits: {},
    supportRunetraits: {},
    defenseRunetraits: {},
    awakeningRunetraits: {},
    runetraitsUltSkills: {},
    sephirots: {},
    sephirotsList: [],
  };

  // constructor() {}

  _populateData = (data, type) => {
    if (type === 'skills') {
      /**
       * * ***SKILLS***
       * * Safe check to avoid reading data to the array in case of a react rerender
       */
      if (this.editorData.warSkillsDeck.length > 0) return;
      data.forEach(dt => {
        /**
         * ! Has to check for dt.archetype before !this.editorData[dt.archetype.slug]
         * ! because runetrait ult skills does not belong to any archetype otherwise
         * ! app would crash trying to access a property that does not exist
         */
        if (dt.archetype && !this.editorData[dt.archetype.slug])
          this.editorData[dt.archetype.slug] = dt.archetype;

        this._beidSkills[dt.beid] = dt.slug;

        // ! Has to run this if check first for runetraits
        // ! because of the same reasons of above comment
        if (dt.type.split(' ')[0] === 'runetrait-skill') {
          this.editorData.runetraitsUltSkills[dt.slug] = dt;
        } else if (dt.archetype.beid === '1') {
          this.editorData.warSkills[dt.slug] = dt;
          this.editorData.warSkills[dt.slug].artifacts.forEach(art => {
            art['isChecked'] = false;
          });
          this.editorData.warSkillsDeck.push(dt);
        } else if (dt.archetype.beid === '2') {
          this.editorData.eleSkills[dt.slug] = dt;
          this.editorData.eleSkillsDeck.push(dt);
        } else if (dt.archetype.beid === '3') {
          this.editorData.mysSkills[dt.slug] = dt;
          this.editorData.mysSkillsDeck.push(dt);
        } else if (dt.archetype.beid === '4') {
          this.editorData.assSkills[dt.slug] = dt;
          this.editorData.assSkillsDeck.push(dt);
        } else if (dt.archetype.beid === '5') {
          this.editorData.gunSkills[dt.slug] = dt;
          this.editorData.gunSkillsDeck.push(dt);
        }
      });

      this.editorData.archSks.forEach((el, i) => {
        this._beidArchetypes[i + 1] = el.arch;
        this.editorData[el.arch].skills = el.skills;
        this.editorData[el.arch].skillsObj = el.skillsObj;
      });
    } else if (type === 'runestones') {
      /**
       * * ***RUNESTONES***
       * * Safe check to avoid reading data to the array in case of a react rerender
       */
      if (this.editorData.runestones.length > 0) return;
      data.forEach(dt => {
        this.editorData.runestonesDeck.push(dt);
        this.editorData.runestones[dt.slug] = dt;
        this._beidRunestones[dt.beid] = dt.slug;
      });
    } else if (type === 'runetraits') {
      /**
       * * ***RUNETRAITS***
       * * Safe check to avoid reading data to the array in case of a react rerender
       */
      if (this.editorData.runetraitsDeck.length > 0) return;
      data.forEach(dt => {
        this._beidRunetraits[dt.beid] = dt.slug;
        if (dt.group === 'onslaught') {
          this.editorData.runetraitsDeck['onslaught'].push(dt);
          this.editorData.onslaughtRunetraits[dt.slug] = dt;
        } else if (dt.group === 'control') {
          this.editorData.runetraitsDeck['control'].push(dt);
          this.editorData.controlRunetraits[dt.slug] = dt;
        } else if (dt.group === 'destiny') {
          this.editorData.runetraitsDeck['destiny'].push(dt);
          this.editorData.destinyRunetraits[dt.slug] = dt;
        } else if (dt.group === 'support') {
          this.editorData.runetraitsDeck['support'].push(dt);
          this.editorData.supportRunetraits[dt.slug] = dt;
        } else if (dt.group === 'defense') {
          this.editorData.runetraitsDeck['defense'].push(dt);
          this.editorData.defenseRunetraits[dt.slug] = dt;
        } else if (dt.group === 'awakening') {
          this.editorData.runetraitsDeck['awakening'].push(dt);
          this.editorData.awakeningRunetraits[dt.slug] = dt;
        }
      });
    } else {
      /**
       * * ***SEPHIROTS***
       * * Safe check to avoid reading data to the array in case of a react rerender
       */
      if (this.editorData.sephirotsList.length > 0) return;
      data.forEach((dt, i) => {
        this.editorData.sephirotsList.push(dt);
        this.editorData.sephirots[dt.beid] = dt;
        this._beidSephirots[dt.beid] = dt.slug;
      });
    }
  };

  _setArchetype = arch => {
    if (this.build.archetype && this.build.archetype.slug === arch) {
      this.build.archetype = {};
      this.build.skills = new Array(14).fill({});
    } else {
      if (this.build.archetype.slug) this.build.skills = new Array(14).fill({});
      this.build.archetype = this.editorData[arch];
    }
  };

  _genLink = () => {
    const A = [],
      equips = [
        'helmet',
        'chest',
        'pants',
        'boots',
        'gloves',
        'greaves',
        'weapon',
      ],
      { archetype, skills, runestones, runetraits, sephirots } = this.build;

    let i = 0;

    if (archetype.slug) A.push(archetype.beid);
    else A.push('0');

    while (i < skills.length) {
      let t = -1;
      if (skills[i].beid) {
        skills[i].artifacts.forEach((art, idx) => {
          if (art.isChecked) t = idx;
        });
        A.push([skills[i].beid, i, t]);
      }
      ++i;
    }
    A.push('_=');

    equips.forEach((equip, i) => {
      if (runestones[equip][0]) A.push([runestones[equip][0].beid, i + 1, 0]);

      if (runestones[equip][1]) A.push([runestones[equip][1].beid, i + 1, 1]);

      if (runestones[equip][2]) A.push([runestones[equip][2].beid, i + 1, 2]);

      if (equip === 'weapon') {
        if (runestones[equip][3]) A.push([runestones[equip][3].beid, i + 1, 3]);

        if (runestones[equip][4]) A.push([runestones[equip][4].beid, i + 1, 4]);
      }
    });
    A.push('_=');

    for (const key in runetraits) {
      A.push([key, runetraits[key]]);
    }
    A.push('_=');

    for (const key in sephirots) {
      A.push(key);
    }

    return btoa(A);
  };

  _populateBuild = hash => {
    const decrypt = atob(hash),
      tempArr = decrypt.split(','),
      arr = [];

    // ! | ARCHETYPE |
    this.build.archetype = this.editorData[this._beidArchetypes[tempArr[0]]];

    let i = 1;
    // ! | SKILL |
    while (tempArr[i] !== '_=') {
      arr.push([tempArr[i], Number(tempArr[i + 1]), Number(tempArr[i + 2])]);
      i += 3;
    }
    ++i;

    let l = arr.length - 1;
    while (arr.length) {
      // ! Skills beid < 500, runetraits ults >= 500
      if (Number(arr[l][0] < 500)) {
        this.build.skills[arr[l][1]] = this.editorData[
          this.build.archetype.skillsObj
        ][this._beidSkills[arr[l][0]]];

        if (arr[l][2] >= 0 && this.build.skills[arr[l][1]].artifacts.length > 0)
          this.build.skills[arr[l][1]].artifacts[arr[l][2]].isChecked = true;
      } else {
        this.build.skills[arr[l][1]] = this.editorData.runetraitsUltSkills[
          this._beidSkills[arr[l][0]]
        ];
      }

      arr.pop();
      --l;
    }

    // ! | RUNESTONE |
    while (tempArr[i] !== '_=') {
      arr.push([tempArr[i], tempArr[i + 1], Number(tempArr[i + 2])]);
      i += 3;
    }
    ++i;

    l = arr.length - 1;
    while (arr.length) {
      const equip = this._beidEquip[arr[l][1]],
        runestoneSlug = this._beidRunestones[arr[l][0]];

      this.build.runestones[equip][arr[l][2]] = this.editorData.runestones[
        runestoneSlug
      ];

      const runestone = this.build.runestones[equip][arr[l][2]];
      this.build.runestones[runestone.group] += runestone.amountOfPoints;

      arr.pop();
      --l;
    }

    // ! | RUNETRAIT |
    while (tempArr[i] !== '_=') {
      arr.push([tempArr[i], tempArr[i + 1]]);
      i += 2;
    }
    ++i;

    l = arr.length - 1;
    while (arr.length) {
      this.build.runetraits[arr[l][0]] = arr[l][1];
      arr.pop();
      --l;
    }

    // ! | SEPHIROT |
    // while (i < tempArr.length) {
    //   arr.push(tempArr[i]);
    //   ++i;
    // }

    while (i < tempArr.length) {
      this.build.sephirots[tempArr[i]] = this.editorData.sephirots[tempArr[i]];
      // arr.push(tempArr[i]);
      ++i;
    }
  };
}
