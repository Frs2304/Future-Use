const {readFile} = require('fs');

const getText = (path) => {
    // A callback used to initialize the promise.
    // This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
    return new Promise((resolve, reject) => {
            readFile(path,'utf8', (err, data) => {
                if(err){
                    reject(err)
                } else {
                    resolve(data);
                }
            })
    })
}

getText('Globals.js')
    .then((result)=> console.log(result))
    .catch((err)=> console.log(err))