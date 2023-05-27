const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resole, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

getText('Globals.js')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))

const start = async () => {
    const first = await getText('Globals.js')
    console.log(first);
}