const model = require('../../domain/Models/ProvinceCard');

const seed = () => {
  model.insertMany(
    [
      { name: 'BuenosAires', typeOfCard: 1, region: 'Centro' },
      { name: 'Catamarca', typeOfCard: 2, region: 'Noroeste' },
      { name: 'Chaco', typeOfCard: 0, region: 'Noreste' },
      { name: 'Chubut', typeOfCard: 1, region: 'Patagonia' },
      { name: 'Cordoba', typeOfCard: 2, region: 'Centro' },
      { name: 'Corrientes', typeOfCard: 0, region: 'Noreste' },
      { name: 'EntreRios', typeOfCard: 1, region: 'Centro' },
      { name: 'Formosa', typeOfCard: 2, region: 'Noreste' },
      { name: 'Jujuy', typeOfCard: 0, region: 'Noroeste' },
      { name: 'LaPampa', typeOfCard: 1, region: 'Centro' },
      { name: 'LaRioja', typeOfCard: 2, region: 'Noroeste' },
      { name: 'Mendoza', typeOfCard: 0, region: 'Cuyo' },
      { name: 'Misiones', typeOfCard: 1, region: 'Noreste' },
      { name: 'Neuquen', typeOfCard: 2, region: 'Patagonia' },
      { name: 'RioNegro', typeOfCard: 0, region: 'Patagonia' },
      { name: 'Salta', typeOfCard: 1, region: 'Noroeste' },
      { name: 'SanJuan', typeOfCard: 2, region: 'Cuyo' },
      { name: 'SanLuis', typeOfCard: 0, region: 'Cuyo' },
      { name: 'SantaCruz', typeOfCard: 1, region: 'Patagonia' },
      { name: 'SantaFe', typeOfCard: 2, region: 'Centro' },
      { name: 'SantiagoDelEstero', typeOfCard: 0, region: 'Noroeste' },
      { name: 'TierraDelFuego', typeOfCard: 1, region: 'Patagonia' },
      { name: 'Tucuman', typeOfCard: 2, region: 'Noroeste' },
      { name: 'BandaOriental', typeOfCard: 0, region: 'Centro' },
      { name: 'IslaSoledad', typeOfCard: 3, region: 'Patagonia' },
      { name: 'IslaGranMalvina', typeOfCard: 3, region: 'Patagonia' },
    ],
    error => {
      console.log(`No funca el seed------->  ${error}`);
    },
  );
};

module.exports = seed;
