const { writeFileSync } = require('fs');
for (let index = 0; index < 1000; index++) {
   writeFileSync('./content/bigfFile.txt',`Hello World ${index}\n`, {flag : 'a'})
}