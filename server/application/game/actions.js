const initialGameState = require('./state');

const NEW_GAME = 'ACTION_NEW_GAME';
function makeNewGame(
  playerNum,
  playerProvinces,
  playerObjectives,
  roundOrder,
  provinceCardsDeck,
) {
  const state = initialGameState;

  for (let i = 0; i < playerNum; i++) {
    state.players.push({
      provinces: playerProvinces[i],
      objective: playerObjectives[i],
    });
  }
  state.provinceCardsDeck = provinceCardsDeck;
  state.roundOrder = roundOrder;
  [state.currentPlayer] = roundOrder; // Lo mismo que state.currentPlayer = roundOrder[0];
  // (Array destructuring)

  return {
    type: NEW_GAME,
    data: state,
  };
}

module.exports = {
  actions: {
    NEW_GAME,

    factory: {
      makeNewGame,
    },
  },
};
