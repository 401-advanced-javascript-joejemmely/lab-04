'use strict';

/**
 * This is a function.
 *
 * @param {string} n - A string param
 * @return {buffer} A good string
 *
 */
module.exports = content => {
  let buffer = Buffer.alloc(content.trim().length);
  [...content.trim()].forEach((char, i) => {
    buffer[i] = char.charCodeAt();
  });

  return buffer;
};
