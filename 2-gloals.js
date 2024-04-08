// MODULES - Encapsulated Code 
// CommonJS, Every file is a module (BY DEFAULT)


//MODULES FOR THIS CODE - 4,5;
const names = require('./4-namesModule');
console.log(names.name1);
console.log(names);

const hello = require('./5-utilities11');
hello(names.name1);
hello(names.name2);
hello('BOYS');
// console.log(hello);


//MODULES FOR THIS CODE - 6;
const alter = require('./6-alternative1');
console.log(alter);


//MODULES FOR THIS CODE - 7;
require('./7-mindGrenade');

