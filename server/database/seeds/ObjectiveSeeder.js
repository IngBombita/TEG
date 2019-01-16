const objetiveModel = require('../../domain/Models/Objetive');

const seed = () => {
  objetiveModel.insertMany(
    [
      {
        isDestruction: 'false',
        target: [
          '5c3048a450e8b16f26b7867f',
          '5c3048a450e8b16f26b78689',
          '5c3048a450e8b16f26b7868a',
          '5c3048a450e8b16f26b7868e',
          '5c3048a450e8b16f26b78691',
          '5c3048a450e8b16f26b78694',
          '5c3048a450e8b16f26b78695',
          '5c3048a450e8b16f26b7867e',
          '5c3048a450e8b16f26b78683',
        ],
        players: 0,
      },
      {
        isDestruction: 'false',
        target: [
          '5c3048a450e8b16f26b7867c',
          '5c3048a450e8b16f26b78680',
          '5c3048a450e8b16f26b78682',
          '5c3048a450e8b16f26b78685',
          '5c3048a450e8b16f26b7868f',
          '5c3048a450e8b16f26b78693',
          '5c3048a450e8b16f26b78691',
          '5c3048a450e8b16f26b78692',
        ],
      },
      {
        isDestruction: 'false',
        target: [
          '5c3048a450e8b16f26b78687',
          '5c3048a450e8b16f26b7868c',
          '5c3048a450e8b16f26b7868d',
          '5c3048a450e8b16f26b7867e',
          '5c3048a450e8b16f26b78681',
          '5c3048a450e8b16f26b78683',
          '5c3048a450e8b16f26b78688',
          '5c3048a450e8b16f26b78695',
        ],
      },
      {
        isDestruction: 'false',
        target: [
          '5c3048a450e8b16f26b7867d',
          '5c3048a450e8b16f26b78684',
          '5c3048a450e8b16f26b78686',
          '5c3048a450e8b16f26b7868b',
          '5c3048a450e8b16f26b78690',
          '5c3048a450e8b16f26b78692',
          '5c3048a450e8b16f26b7867c',
          '5c3048a450e8b16f26b78694',
        ],
      },
      {
        isDestruction: 'false',
        target: [
          '5c3048a450e8b16f26b78687',
          '5c3048a450e8b16f26b7868c',
          '5c3048a450e8b16f26b7868d',
          '5c3048a450e8b16f26b78693',
          '5c3048a450e8b16f26b78688',
          '5c3048a450e8b16f26b78689',
          '5c3048a450e8b16f26b78695',
          '5c3048a450e8b16f26b78694',
        ],
      },
      {
        isDestruction: 'true',
        target: [],
        players: 0,
      },
      {
        isDestruction: 'true',
        target: [],
        players: 1,
      },
      {
        isDestruction: 'true',
        target: [],
        players: 2,
      },
      {
        isDestruction: 'true',
        target: [],
        players: 3,
      },
      {
        isDestruction: 'true',
        target: [],
        players: 4,
      },
      {
        isDestruction: 'true',
        target: [],
        players: 5,
      },
    ],
    error => {
      if (error) console.log(`Salio todo mal pibe:   ${error}`);
      else console.log('Ta sideado');
    },
  );
};

module.exports = seed;
