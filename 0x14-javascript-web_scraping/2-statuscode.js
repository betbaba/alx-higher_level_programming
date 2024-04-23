#!/usr/bin/node

const url = process.argv[2];

fetch(url)
  .then(response => {
    console.log(`code: ${response.status}`);
  })
  .catch(error => {
    console.error(error);
  });
