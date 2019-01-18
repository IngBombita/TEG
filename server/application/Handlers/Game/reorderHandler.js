const validator = require('../../Validators/Game/attackValidator');

exports.reorder = async function reorder(gameState) {
  validator.run(gameState);
  const gameStateUpdated = updateState(gameState);
  return gameStateUpdated;
};

const updateState = gameState => {
  const destinationProvinceIndex = gameState.players[
    gameState.action.to.player
  ].provinces.findIndex(
    province => province.name === gameState.action.to.province,
  );
  const originProvinceIndex = gameState.players[
    gameState.action.from.player
  ].provinces.findIndex(
    province => province.name === gameState.action.from.province,
  );
  // UPDATE CHIPS ----------------------------------------------------
  gameState.players[gameState.action.to.player].provinces[
    destinationProvinceIndex
  ].chips += 1;
  gameState.players[gameState.action.from.player].provinces[
    originProvinceIndex
  ].chips -= 1;
  return gameState;
};
