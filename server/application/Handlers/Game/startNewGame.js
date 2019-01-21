const provinceCardRepository = require('../../../domain/Repositories/ProvinceCardRepository');
const objectiveRepository = require('../../../domain/Repositories/ObjectiveRepository');

const { makeNewGame } = require('../../Actions/Game').actions.factory;
const dispatch = require('../../Dispatcher');

exports.start = async function start(gameOptions) {
  const roundOrder = [];
  const playerNum = gameOptions.players;

  while (roundOrder.length < playerNum) {
    const randomPlayer = Math.floor(Math.random() * playerNum);
    if (roundOrder.indexOf(randomPlayer) === -1) roundOrder.push(randomPlayer);
  }

  const provinces = await dealProvinces(playerNum);
  const { cardsDeck, playerProvinces } = provinces;
  const playerObjectives = await dealObjectives(playerNum);

  const action = makeNewGame(
    playerNum,
    playerProvinces,
    playerObjectives,
    roundOrder,
    cardsDeck,
  );
  return dispatch(action);
};

const dealObjectives = async playerNum => {
  const objectivesArray = await objectiveRepository.getAll(playerNum);
  const playerObjectives = [];

  shuffleArray(objectivesArray);

  let i;
  for (i = 0; i < playerNum; i++) {
    playerObjectives[i] = objectivesArray[i];
  }
  return playerObjectives;
};

const dealProvinces = async playerNum => {
  const provincesArray = await provinceCardRepository.getAll();
  shuffleArray(provincesArray);

  const provinces = {
    cardsDeck: [],
    playerProvinces: [],
  };

  let i;
  for (i = 0; i < playerNum; i++) {
    provinces.playerProvinces.push([]);
  }

  provincesArray.forEach((province, index) => {
    provinces.cardsDeck.push({
      name: province.name,
      type: province.typeOfCard,
    });

    const playerIndex = index % playerNum;
    provinces.playerProvinces[playerIndex].push({
      name: province.name,
      chips: 1,
    });
  });

  return provinces;
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
