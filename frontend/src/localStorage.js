export const loadState = state => {
  try {
    const serializedState = localStorage.getItem(state);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (stName, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stName, serializedState);
  } catch {
    // ignore write errors
  }
};
