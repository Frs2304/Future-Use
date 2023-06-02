const { createReadStream } = require('fs');

const stream = createReadStream('./OsModules.js');

stream.on('data', (result) => {
    console.log(result)
})