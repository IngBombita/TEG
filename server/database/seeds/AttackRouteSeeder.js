const model = require('../../domain/Models/AttackRoute');
const provinceCardModel = require('../../domain/Models/ProvinceCard');

const seed = async () => {
  const query = provinceCardModel.find({}, { name: 1, _id: 1, typeOfCard: 1 });
  const data = await query.exec();
  model.insertMany(
    [
      {
        node1: data.find(province => province.name === 'Jujuy')._id,
        node2: data.find(province => province.name === 'Salta')._id,
      },
      {
        node1: data.find(province => province.name === 'Jujuy')._id,
        node2: data.find(province => province.name === 'Formosa')._id,
      },
      {
        node1: data.find(province => province.name === 'Jujuy')._id,
        node2: data.find(province => province.name === 'Neuquen')._id,
      },
      {
        node1: data.find(province => province.name === 'Salta')._id,
        node2: data.find(province => province.name === 'Formosa')._id,
      },
      {
        node1: data.find(province => province.name === 'Salta')._id,
        node2: data.find(province => province.name === 'Chaco')._id,
      },
      {
        node1: data.find(province => province.name === 'Salta')._id,
        node2: data.find(province => province.name === 'SantiagoDelEstero')._id,
      },
      {
        node1: data.find(province => province.name === 'Salta')._id,
        node2: data.find(province => province.name === 'Tucuman')._id,
      },
      {
        node1: data.find(province => province.name === 'Salta')._id,
        node2: data.find(province => province.name === 'Catamarca')._id,
      },
      {
        node1: data.find(province => province.name === 'Formosa')._id,
        node2: data.find(province => province.name === 'Chaco')._id,
      },
      {
        node1: data.find(province => province.name === 'Misiones')._id,
        node2: data.find(province => province.name === 'Corrientes')._id,
      },
      {
        node1: data.find(province => province.name === 'Misiones')._id,
        node2: data.find(province => province.name === 'BandaOriental')._id,
      },
      {
        node1: data.find(province => province.name === 'Corrientes')._id,
        node2: data.find(province => province.name === 'Chaco')._id,
      },
      {
        node1: data.find(province => province.name === 'Corrientes')._id,
        node2: data.find(province => province.name === 'SantaFe')._id,
      },
      {
        node1: data.find(province => province.name === 'Corrientes')._id,
        node2: data.find(province => province.name === 'EntreRios')._id,
      },
      {
        node1: data.find(province => province.name === 'Corrientes')._id,
        node2: data.find(province => province.name === 'BandaOriental')._id,
      },
      {
        node1: data.find(province => province.name === 'Tucuman')._id,
        node2: data.find(province => province.name === 'Catamarca')._id,
      },
      {
        node1: data.find(province => province.name === 'Tucuman')._id,
        node2: data.find(province => province.name === 'SantiagoDelEstero')._id,
      },
      {
        node1: data.find(province => province.name === 'SantiagoDelEstero')._id,
        node2: data.find(province => province.name === 'Cordoba')._id,
      },
      {
        node1: data.find(province => province.name === 'SantiagoDelEstero')._id,
        node2: data.find(province => province.name === 'SantaFe')._id,
      },
      {
        node1: data.find(province => province.name === 'SantiagoDelEstero')._id,
        node2: data.find(province => province.name === 'Chaco')._id,
      },
      {
        node1: data.find(province => province.name === 'Catamarca')._id,
        node2: data.find(province => province.name === 'LaRioja')._id,
      },
      {
        node1: data.find(province => province.name === 'Catamarca')._id,
        node2: data.find(province => province.name === 'Cordoba')._id,
      },
      {
        node1: data.find(province => province.name === 'Catamarca')._id,
        node2: data.find(province => province.name === 'SantiagoDelEstero')._id,
      },
      {
        node1: data.find(province => province.name === 'LaRioja')._id,
        node2: data.find(province => province.name === 'SanJuan')._id,
      },
      {
        node1: data.find(province => province.name === 'LaRioja')._id,
        node2: data.find(province => province.name === 'Cordoba')._id,
      },
      {
        node1: data.find(province => province.name === 'LaRioja')._id,
        node2: data.find(province => province.name === 'SanLuis')._id,
      },
      {
        node1: data.find(province => province.name === 'SantaFe')._id,
        node2: data.find(province => province.name === 'EntreRios')._id,
      },
      {
        node1: data.find(province => province.name === 'SantaFe')._id,
        node2: data.find(province => province.name === 'Chaco')._id,
      },
      {
        node1: data.find(province => province.name === 'SantaFe')._id,
        node2: data.find(province => province.name === 'Cordoba')._id,
      },
      {
        node1: data.find(province => province.name === 'SantaFe')._id,
        node2: data.find(province => province.name === 'BuenosAires')._id,
      },
      {
        node1: data.find(province => province.name === 'SanLuis')._id,
        node2: data.find(province => province.name === 'SanJuan')._id,
      },
      {
        node1: data.find(province => province.name === 'SanLuis')._id,
        node2: data.find(province => province.name === 'Mendoza')._id,
      },
      {
        node1: data.find(province => province.name === 'SanLuis')._id,
        node2: data.find(province => province.name === 'LaPampa')._id,
      },
      {
        node1: data.find(province => province.name === 'SanLuis')._id,
        node2: data.find(province => province.name === 'Cordoba')._id,
      },
      {
        node1: data.find(province => province.name === 'BuenosAires')._id,
        node2: data.find(province => province.name === 'BandaOriental')._id,
      },
      {
        node1: data.find(province => province.name === 'BuenosAires')._id,
        node2: data.find(province => province.name === 'EntreRios')._id,
      },
      {
        node1: data.find(province => province.name === 'BuenosAires')._id,
        node2: data.find(province => province.name === 'LaPampa')._id,
      },
      {
        node1: data.find(province => province.name === 'BuenosAires')._id,
        node2: data.find(province => province.name === 'Cordoba')._id,
      },
      {
        node1: data.find(province => province.name === 'BuenosAires')._id,
        node2: data.find(province => province.name === 'RioNegro')._id,
      },
      {
        node1: data.find(province => province.name === 'Mendoza')._id,
        node2: data.find(province => province.name === 'SanJuan')._id,
      },
      {
        node1: data.find(province => province.name === 'Mendoza')._id,
        node2: data.find(province => province.name === 'LaPampa')._id,
      },
      {
        node1: data.find(province => province.name === 'Mendoza')._id,
        node2: data.find(province => province.name === 'Neuquen')._id,
      },
      {
        node1: data.find(province => province.name === 'RioNegro')._id,
        node2: data.find(province => province.name === 'Chubut')._id,
      },
      {
        node1: data.find(province => province.name === 'RioNegro')._id,
        node2: data.find(province => province.name === 'Neuquen')._id,
      },
      {
        node1: data.find(province => province.name === 'Chubut')._id,
        node2: data.find(province => province.name === 'SantaCruz')._id,
      },
      {
        node1: data.find(province => province.name === 'SantaCruz')._id,
        node2: data.find(province => province.name === 'TierraDelFuego')._id,
      },
      {
        node1: data.find(province => province.name === 'SantaCruz')._id,
        node2: data.find(province => province.name === 'IslaGranMalvina')._id,
      },
      {
        node1: data.find(province => province.name === 'IslaGranMalvina')._id,
        node2: data.find(province => province.name === 'IslaSoledad')._id,
      },
      {
        node1: data.find(province => province.name === 'IslaSoledad')._id,
        node2: data.find(province => province.name === 'TierraDelFuego')._id,
      },
    ],
    error => {
      if (error) console.log(`No funca el seed------->  ${error}`);
      else console.log('Todo bien');
    },
  );
};

module.exports = seed;
