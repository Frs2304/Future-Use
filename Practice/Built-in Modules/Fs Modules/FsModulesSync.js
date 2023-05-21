const {readFileSync, writeFileSync} = require('fs');

// Synchronously reads the entire contents of a file.
const first = readFileSync('first.txt','utf8');
const second = readFileSync('.second.txt','utf8');

console.log(first,second);