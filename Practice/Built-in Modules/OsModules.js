// Importing the built-in 'os module'
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// returns the system uptime(in Seconds)
console.log(`The syetem Uptime is ${os.uptime()} seconds`);

// returns the info about System's OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);