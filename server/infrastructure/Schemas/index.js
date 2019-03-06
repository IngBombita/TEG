const Ajv = require('ajv');

const ajv = new Ajv({ allErrors: true });

module.exports = ajv;
