const provinceCardRepository = require('../../../domain/Repositories/ProvinceCardRepository');
const objectiveRepository = require('../../../domain/Repositories/ObjectiveRepository');

exports.start = async function start(gameOptions) {
  const gameState = {
    players: [],
    roundOrder: [],
    provinceCardsDeck: [],
  };
  for (let i = 0; i < gameOptions.players; i++) {
    gameState.players.push({ provinces: [] });
  }
  while (gameState.roundOrder.length < gameOptions.players) {
    const randomPlayer = Math.floor(Math.random() * gameOptions.players);
    if (gameState.roundOrder.indexOf(randomPlayer) === -1)
      gameState.roundOrder.push(randomPlayer);
  }
  await dealProvinces(gameState);
  await dealobjective(gameState);
  gameState.currentPlayer =
    gameState.roundOrder[0]; /* eslint prefer-destructuring: 0 */
  return gameState;
};

const dealobjective = async gameState => {
  const objectivesArray = await objectiveRepository.getAll(
    gameState.players.length,
  );
  shuffleArray(objectivesArray);
  gameState.players.forEach((player, index) => {
    player.objective = objectivesArray[index];
  });
};

const dealProvinces = async gameState => {
  const provincesArray = await provinceCardRepository.getAll();
  shuffleArray(provincesArray);
  provincesArray.forEach((province, index) => {
    gameState.provinceCardsDeck.push({
      name: province.name,
      type: province.typeOfCard,
    });
    gameState.players[index % gameState.players.length].provinces.push({
      name: province.name,
      chips: 1,
    });
  });
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [
      array[j],
      array[i],
    ]; /* eslint no-param-reassign: 0 */
  }
}
