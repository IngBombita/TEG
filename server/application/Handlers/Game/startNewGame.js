const provinceCardRepository = require('../../../domain/Repositories/ProvinceCardRepository');

exports.start = function start(gameOptions) {
  var gameState.players = new Array(gameOptions.players);
  dealProvinces(gameState);
  return gameOptions;
};

const dealProvinces = async (gameState) => {
  const provincesArray = await provinceCardRepository.getAll();
  shuffleArray(provincesArray);
  console.log(provincesArray);
  provincesArray.foreach((province, index) => {
    
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
