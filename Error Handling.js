const fs = require('fs');
function errorCallback(err, data){
    if(err){
        console.error("There was an error", err);
        return;
    }
    console.log(data);
}
fs.readFile('index.js', errorCallback);
fs.readFile('second.js', errorCallback);