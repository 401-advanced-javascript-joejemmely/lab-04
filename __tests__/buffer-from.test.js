'use strict';

const bufferFrom = require('../lib/buffer-from.js');

describe('bufferFrom', () => {
  it('Returns a buffer', () => {
    expect(bufferFrom('test')).toBeInstanceOf(Buffer);
  });

  it('Returns the same content as Buffer.from()', () => {
    expect(bufferFrom('test')).toEqual(Buffer.from('test'));
  });
});
