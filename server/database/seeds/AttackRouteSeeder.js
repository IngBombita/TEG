const model = require('../../domain/Models/AttackRoute');
const provinceCardModel = require('../../domain/Models/ProvinceCard');

const seed = async () => {
  const query = provinceCardModel.find({}, { name: 1, _id: 1, typeOfCard: 1 });
  const data = await query.exec();
  model.insertMany(
    [
      {
        node1: data.find(province => province.name === 'Neuquen')._id,
        node2: data.find(province => province.name === 'BandaOriental')._id,
      }, // TODO: Poner todas la rutas posibles
    ],
    error => {
      console.log(`No funca el seed------->  ${error}`);
    },
  );
};

module.exports = seed;
