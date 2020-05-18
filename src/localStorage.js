export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    const stateObject = JSON.parse(serializedState);
    const reducerKeys = Object.keys(stateObject);
    for (let i = 0; i < reducerKeys.length; i += 1) {
      stateObject[reducerKeys[i]] = stateObject[reducerKeys[i]];
    }
    return stateObject;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
  }
};
