const { Map, List } = require('immutable');

const initialState = Map({
  players: List([]),
  roundOrder: List([]),
  provinceCardsDeck: List([]),
  roundNumber: 1,
  currentPlayer: 0,
});

// eslint-disable-next-line no-var
var gameState = {
  state: initialState,
  getState() {
    return this.state;
  },
  setState(newState) {
    this.state = newState;
  },
};

module.exports = {
  setGameState: gameState.setState.bind(gameState),
  getGameState: gameState.getState.bind(gameState),
};
