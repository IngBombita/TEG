const model = require('../Models/Objective');
/*
Conquistar Patagonia y 2 del Noreste (9 prov)
Conquistar Región Pampeana, Tierra del Fuego y Tucumán (8 prov)
Conquistar Cuyo, Noreste y la Isla Gran Malvina (8 prov)
Conquistar Noroeste, Buenos Aires y la Isla Soledad (8 prov)
Conquistar 2 provincias de cada región (10 prov)
Conquistar Cuyo, La Banda Oriental, Misiones, Neuquén y las Islas Malvinas (9 prov)
*/
const seed = () => {
  model.insertMany([{
    id: 1,
    isDestruction: false,
    target: [],
  },], error => {
    console.log(`No funca el seed------->  ${error}`);
  });
};

module.exports = seed;
