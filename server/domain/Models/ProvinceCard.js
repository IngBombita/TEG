const mongoose = require('mongoose');
const { Schema } = mongoose;

const provinceCardSchema = new Schema({
  name: { type: String, required: true, unique: true },
  typeOfCard: { type: Number, min: 0, max: 3 },
});

const ProvinceCard = mongoose.model('province_card', provinceCardSchema);
module.exports = ProvinceCard;
