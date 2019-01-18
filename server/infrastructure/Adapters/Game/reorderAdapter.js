exports.reorder = function reorder(data) {
  if (!data.action)
    throw new Error('No se especifico que reordenamiento quiere hacer');
  return data;
};
