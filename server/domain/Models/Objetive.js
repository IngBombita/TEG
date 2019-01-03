const mongoose = require('mongoose');
const { Schema } = mongoose;

const objetiveSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  isDestruction: { type: Boolean, required: true },
  target: [],
});

const Objective = mongoose.model('Objective', objetiveSchema);
module.exports = Objective;
