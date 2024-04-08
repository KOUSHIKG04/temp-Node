const lodAsh = require('lodash');

const items1 = [1,[2,[3,[4,[5]]]]];
const newitm = lodAsh.flattenDeep(items1) //
console.log(newitm);