const provinceCardModel = require('../Models/ProvinceCard');

exports.getAll = async () => {
  const query = provinceCardModel.find({}, { name: 1, _id: 0, typeOfCard: 1 });
  const data = await query.exec();
  return data;
};