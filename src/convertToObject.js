'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayWithStyles = complexStylesString.split(';')
    .map((el) => el.trim());
  const resultObject = {};

  for (const el of arrayWithStyles) {
    const pair = el.split(':').map((el) => el.trim());
    resultObject[pair[0]] = pair[1];
  }

  return resultObject;
}

module.exports = convertToObject;
