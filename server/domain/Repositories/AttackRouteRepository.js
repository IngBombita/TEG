const AttackRouteModel = require('../Models/AttackRoute');
const provinceCardRepository = require('./ProvinceCardRepository');

exports.getAll = async () => {
  const query = AttackRouteModel.find({}, { _id: 0 })
    .populate('node1')
    .populate('node2');
  const data = await query.exec();
  return data;
};

exports.exploreRoute = async (from, to) => {
  const node1 = await provinceCardRepository.getIdByName(from);
  const node2 = await provinceCardRepository.getIdByName(to);
  const query = AttackRouteModel.find(
    {
      $and: [
        { $or: [{ node1 }, { node1: node2 }] },
        { $or: [{ node2: node1 }, { node2 }] },
      ],
    },
    { _id: 1 },
  );
  const data = await query.exec();
  if (data) return true;
  return false;
};
