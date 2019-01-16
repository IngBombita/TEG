const validator = require('../../Validators/Game/attackValidator');

exports.attack = async function attack(gameState) {
  validator.run(gameState);
  const diceResults = rollDices(gameState);
  const gameStateUpdated = updateState(diceResults, gameState);
  return gameStateUpdated;
};

const updateState = (diceResults, gameState) => {
  const gameStateUpdated = Object.assign({ diceResults }, gameState);
  const defenderProvinceIndex = gameStateUpdated.players[
    gameState.action.to.player
  ].provinces.findIndex(
    province => province.name === gameState.action.to.province,
  );
  const attackerProvinceIndex = gameStateUpdated.players[
    gameState.action.from.player
  ].provinces.findIndex(
    province => province.name === gameState.action.from.province,
  );
  // UPDATE CHIPS ----------------------------------------------------
  gameStateUpdated.diceResults.defenderWinsResults.forEach(result => {
    if (result) {
      gameStateUpdated.players[gameState.action.from.player].provinces[
        attackerProvinceIndex
      ].chips -= 1;
    } else {
      gameStateUpdated.players[gameState.action.to.player].provinces[
        defenderProvinceIndex
      ].chips -= 1;
    }
  });
  // UPDATE PROVINCES IF IT IS NECESSARY -----------------------------
  if (
    gameStateUpdated.players[gameState.action.to.player].provinces[
      defenderProvinceIndex
    ].chips <= 0
  ) {
    gameStateUpdated.players[gameState.action.from.player].provinces[
      attackerProvinceIndex
    ].chips -= 1;
    const conquista = gameStateUpdated.players[
      gameState.action.to.player
    ].provinces.filter(
      province => province.name !== gameState.action.to.province.name,
    );
    conquista[0].chips = 1;
    gameStateUpdated.players[gameState.action.from.player].provinces.push(
      conquista[0],
    );
  }
  return gameStateUpdated;
};

const rollDices = gameState => {
  // ROLL DICES  -----------------------------------------------
  const diceResults = {
    attackerDices: [],
    defenderDices: [],
    defenderWinsResults: [],
  };
  const diceNumber = [];
  diceNumber[0] =
    gameState.action.from.chips <= 3 ? gameState.action.from.chips - 1 : 3; // Atacante "pelea" con uno menos
  diceNumber[1] =
    gameState.action.to.chips <= 3 ? gameState.action.to.chips : 3; // Defensor
  for (let i = 0; i < diceNumber[0]; i++) {
    diceResults.attackerDices.push(Math.floor(1 + Math.random() * 6));
  }
  for (let i = 0; i < diceNumber[1]; i++) {
    diceResults.defenderDices.push(Math.floor(1 + Math.random() * 6));
  }
  // SORT DICES  -------------------------------------------
  diceResults.attackerDices.sort((a, b) => b - a);
  diceResults.defenderDices.sort((a, b) => b - a);
  // COMPARE ----------------------------------------------
  diceResults.defenderDices.forEach((number, index) => {
    if (diceResults.attackerDices[index])
      diceResults.defenderWinsResults.push(
        number >= diceResults.attackerDices[index],
      );
    return null;
  });
  return diceResults;
};
