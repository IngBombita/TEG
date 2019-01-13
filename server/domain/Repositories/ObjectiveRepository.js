const objectiveModel = require('../Models/Objective');

exports.getAll = async players => {
  const query = objectiveModel
    .find(
      { players: { $lt: players } },
      { isDestruction: 1, _id: 0, players: 1 },
    )
    .populate('target');
  const data = await query.exec();
  return data;
};
