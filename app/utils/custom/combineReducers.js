export default function combineReducers(state, action, keyReducerObjs) {
  let finalState = state;

  keyReducerObjs.forEach(value => {
    const key = value.get('key');
    const reducer = value.get('reducer');

    finalState = finalState.set(key, reducer(state.get(key), action));
  });
  return finalState;
}
