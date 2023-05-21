 const {  readFile, writeFile } = require('fs');

 // Asynchronously reads the entire contents of a file
 readFile('./Practice/Built-in Modules/Fs Modules/FsModulesSync.js', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    console.log(result);
 });

// Asynchronously reads the entire contents of a file
 writeFile('Practice/Built-in Modules/Fs Modules/second.txt',
 `Here is the result: ${first}, ${second}`, (err, result) => {
    if(err) {
        return
    }
    console.log(result);
 })