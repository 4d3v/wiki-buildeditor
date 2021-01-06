export function compressString(str, size) {
  let arrStr = str.split(' ').splice(0, size),
    newStr = '';

  arrStr.forEach((el, i) => {
    newStr = i === 0 ? el : newStr + ' ' + el;
  });

  const lastChar = newStr.length - 1;
  if (
    newStr[lastChar] === '"' ||
    newStr[lastChar] === "'" ||
    newStr[lastChar] === ',' ||
    newStr[lastChar] === '.' ||
    newStr[lastChar] === '!' ||
    newStr[lastChar] === '?'
  )
    newStr = newStr.substring(0, lastChar) + '...';
  else newStr = newStr + '...';

  return newStr;
}

export const clearBuildDt = BE => {
  BE.build.archetype = {};
  BE.build.runetraits = {};
  BE.build.skills = new Array(14).fill({});
  BE.build.runestones = {
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
  };
};
