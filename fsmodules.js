const fs = require('fs');
fs.readFile('second.js','utf8',(err,data)=>{
    console.log(err,data)
})
console.log("Finished reading file") 
