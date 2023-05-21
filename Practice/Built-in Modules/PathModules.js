const path = require('path');
 
// outputs the file current path
const filePath = path.join('/Practice','Built-in Modules','PathModules.js');
console.log(filePath);

// outputs the  current File name
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'PathModules.js');
console.log(absolute);