const reducer = require('../Reducers/Game');
const { getGameState, setGameState } = require('../State/Game');

function dispatch(action) {
  const newGameState = reducer(getGameState(), action);
  setGameState(newGameState);

  return {
    action,
    newGameState,
  };
}

module.exports = dispatch;
