const validator = require('../../Validators/Game/attackValidator');
const attackRouteRepository = require('../../../domain/Repositories/AttackRouteRepository');

exports.attack = async function attack(gameState) {
  const avaibleRoutes = await attackRouteRepository.getAll();
  validator.run(gameState, avaibleRoutes);
  const diceResults = rollDices(gameState);
  const gameStateUpdate = Object.assign({ diceResults }, gameState);
  console.log(gameStateUpdate);
  return gameStateUpdate;
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
