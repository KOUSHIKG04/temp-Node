 //BUILT IN MODULE OS
const os = require('os');


//Info About current user
const usera = os.userInfo()
console.log(usera);


//Method returns system uptime in seconds
const userb = os.uptime()
console.log(`uptime = ${userb} seconds`);


//Mehod returns usin object
const currentOs = {
    name : os.type(), toltalmemory : os.totalmem(), release : os.release(), freememory : os.freemem(), 
    
}
console.log(currentOs);