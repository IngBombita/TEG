const objetiveModel = require('../../domain/Models/Objective');
const provinceCardModel = require('../../domain/Models/ProvinceCard');

const seed = async () => {
  const query = provinceCardModel.find({}, { name: 1, _id: 1, typeOfCard: 1 });
  const data = await query.exec();
  objetiveModel.insertMany(
    [
      {
        isDestruction: 'false',
        target: [
          data.find(province => province.name === 'Neuquen')._id,
          data.find(province => province.name === 'RioNegro')._id,
          data.find(province => province.name === 'Chubut')._id,
          data.find(province => province.name === 'SantaCruz')._id,
          data.find(province => province.name === 'TierraDelFuego')._id,
          data.find(province => province.name === 'IslaGranMalvina')._id,
          data.find(province => province.name === 'IslaSoledad')._id,
          data.find(province => province.name === 'Jujuy')._id,
          data.find(province => province.name === 'Tucuman')._id,
        ],
        players: 0,
      },
      {
        isDestruction: 'false',
        target: [
          data.find(province => province.name === 'TierraDelFuego')._id,
          data.find(province => province.name === 'Tucuman')._id,
          data.find(province => province.name === 'BuenosAires')._id,
          data.find(province => province.name === 'BandaOriental')._id,
          data.find(province => province.name === 'SantaFe')._id,
          data.find(province => province.name === 'Cordoba')._id,
          data.find(province => province.name === 'EntreRios')._id,
          data.find(province => province.name === 'LaPampa')._id,
        ],
      },
      {
        isDestruction: 'false',
        target: [
          data.find(province => province.name === 'SanJuan')._id,
          data.find(province => province.name === 'SanLuis')._id,
          data.find(province => province.name === 'Mendoza')._id,
          data.find(province => province.name === 'IslaGranMalvina')._id,
          data.find(province => province.name === 'Formosa')._id,
          data.find(province => province.name === 'Chaco')._id,
          data.find(province => province.name === 'Corrientes')._id,
          data.find(province => province.name === 'Misiones')._id,
        ],
      },
      {
        isDestruction: 'false',
        target: [
          data.find(province => province.name === 'Jujuy')._id,
          data.find(province => province.name === 'Salta')._id,
          data.find(province => province.name === 'Tucuman')._id,
          data.find(province => province.name === 'Catamarca')._id,
          data.find(province => province.name === 'SantiagoDelEstero')._id,
          data.find(province => province.name === 'LaRioja')._id,
          data.find(province => province.name === 'BuenosAires')._id,
          data.find(province => province.name === 'IslaSoledad')._id,
        ],
      },
      {
        isDestruction: 'false',
        target: [
          data.find(province => province.name === 'SanJuan')._id,
          data.find(province => province.name === 'SanLuis')._id,
          data.find(province => province.name === 'Mendoza')._id,
          data.find(province => province.name === 'BandaOriental')._id,
          data.find(province => province.name === 'Misiones')._id,
          data.find(province => province.name === 'Neuquen')._id,
          data.find(province => province.name === 'IslaSoledad')._id,
          data.find(province => province.name === 'IslaGranMalvina')._id,
        ],
      },
      {
        isDestruction: 'true',
        target: [],
        players: 0,
      },
      {
        isDestruction: 'true',
        target: [],
        players: 1,
      },
      {
        isDestruction: 'true',
        target: [],
        players: 2,
      },
      {
        isDestruction: 'true',
        target: [],
        players: 3,
      },
      {
        isDestruction: 'true',
        target: [],
        players: 4,
      },
      {
        isDestruction: 'true',
        target: [],
        players: 5,
      },
    ],
    error => {
      if (error) console.log(`Salio todo mal pibe:   ${error}`);
      else console.log('Ta sideado');
    },
  );
};

module.exports = seed;
