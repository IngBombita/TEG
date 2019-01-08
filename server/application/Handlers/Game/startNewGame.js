const provinceCardRepository = require('../../../domain/Repositories/ProvinceCardRepository');

exports.start = async function start(gameOptions) {
  const gameState = {};
  gameState.players = [];
  for (let i = 0; i < gameOptions.players; i++) {
    gameState.players.push(new Player());
  }
  await dealProvinces(gameState);
  return gameState;
};

const dealProvinces = async gameState => {
  const provincesArray = await provinceCardRepository.getAll();
  shuffleArray(provincesArray);
  provincesArray.forEach((province, index) => {
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

const Player = function Player() {
  this.provinces = [];
};
