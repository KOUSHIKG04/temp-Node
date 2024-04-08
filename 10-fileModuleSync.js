//MODULE FS-Sync

// Old method : const fs = require('fs');

//Anotherway of Impoting modules methods
const {readFileSync, writeFileSync} = require('fs');

console.log('Start')
//Reading a file
const one = readFileSync('./content/one.txt','utf8')
const two = readFileSync('./content/two.txt','utf8')
console.log(`${one}, ${two}`);

//Creating a new file
writeFileSync('./content/resultSync.txt',`Here is the result : ${one}, ${two}`);


//Using {flag : 'a' } which creates same result in another line
writeFileSync('./content/resultSyncExtraLine.txt',
`Here is the result : ${one}, ${two}`, {flag : 'a'});

console.log('Done with this task!!');
console.log('Starting the next one');
