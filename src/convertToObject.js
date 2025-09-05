'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')

    .map((line) => line.trim())

    .filter((line) => line.includes(':'))
    .forEach((line) => {
      const [property, value] = line.split(':');
      const key = property.trim();
      const val = value.trim();

      if (key && val) {
        result[key] = val;
      }
    });

  return result;
}

module.exports = convertToObject;
