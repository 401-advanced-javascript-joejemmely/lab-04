'use strict';

const fs = require('fs');
const bufferFrom = require('./lib/buffer-from.js');
const sliceBuffer = require('./lib/slice-buffer.js');

const content = `
'use strict';

const arr = ['adam','benoit','chris'];
arr.forEach(name=>console.log(name));
`;

// Part 1
fs.writeFile('files/loop.js', bufferFrom(content), err => {
  if (err) {
    console.err(err);
  } else console.log('files/loop.js was created or updated');
});

// Part 2
fs.readFile('files/pair-programming.txt', (err, data) => {
  if (err) console.err('Something went wrong');

  console.log(sliceBuffer(data, '\n').toString());

  const tags = ['<article>\n', '\n</article>'];

  const newContent = Buffer.concat([
    Buffer.from(tags[0]),
    data,
    Buffer.from(tags[1]),
  ]);

  // HTMLify the data

  //console.log(newContent.toString());

  fs.writeFile('files/index.html', newContent, err => {
    if (err) console.err(err);
    else console.log('files/pair-programming.html was created or updated');
  });
});
