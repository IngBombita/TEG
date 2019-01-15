const AttackRouteModel = require('../Models/AttackRoute');

exports.getAll = async () => {
  const query = AttackRouteModel.find({}, { node1: 1, _id: 0, node2: 1 });
  const data = await query.exec();
  return data;
};
