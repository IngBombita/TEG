const { ACTION_NEW_GAME } = require('../../Actions/Game').actions;

function rootReducer(state, action) {
  let newState = state;

  switch (action.type) {
    case ACTION_NEW_GAME: {
      const {
        playerNum,
        playerProvinces,
        playerObjectives,
        roundOrder,
        provinceCardsDeck,
      } = action.data;

      for (let i = 0; i < playerNum; i++) {
        const players = newState.get('players');
        newState = newState.set(
          'players',
          players.push({
            provinces: playerProvinces[i],
            objective: playerObjectives[i],
          }),
        );
      }
      newState = newState.set('provinceCardsDeck', provinceCardsDeck);
      newState = newState.set('roundOrder', roundOrder);
      newState = newState.set('currentPlayer', roundOrder[0]);

      break;
    }
    default:
  }
  return newState;
}

module.exports = rootReducer;
