#!/usr/bin/node

const r = require('fs');
const readme = process.argv[2];
r.readFile(readme, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
