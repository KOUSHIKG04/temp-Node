const {createReadStream} = require('fs');

const stream = createReadStream('./content/bigFile.txt')
//const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 }); const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })


//(Event : 'data')
stream.on('data',(result)=>{ console.log(result);})



