const ACTION_NEW_GAME = 'ACTION_NEW_GAME';
function makeNewGame(
  playerNum,
  playerProvinces,
  playerObjectives,
  roundOrder,
  provinceCardsDeck,
) {
  return {
    type: ACTION_NEW_GAME,
    data: {
      playerNum,
      playerProvinces,
      playerObjectives,
      roundOrder,
      provinceCardsDeck,
    },
  };
}

module.exports = {
  actions: {
    ACTION_NEW_GAME,

    factory: {
      makeNewGame,
    },
  },
};
