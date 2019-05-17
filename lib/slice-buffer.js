'use strict';

module.exports = (buffer, char) => {
  let buffers = [];
  let start = 0;
  let end = buffer.indexOf(char);
  while (buffer.indexOf(char, start) != -1) {
    buffers.push(buffer.slice(start, end));
    start = end;
    end = buffer.indexOf(char, start + 1);
  }
  return Buffer.concat(buffers);
};
