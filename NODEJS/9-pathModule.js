//BUILT IN MODULE path
const path = require('path');


//Path seperator
const seperator = path.sep
console.log(seperator);


//Join Method - joins a sequences of path segments
const join = path.join('content','subfolder','text.txt')
console.log(join);


//Base Name - Last Portion of segment
const baseName = path.basename(join);
console.log(baseName);


//resolve - absolute path
const absolut = path.resolve(__dirname, 'content','subfolder','text.txt');
console.log(absolut);