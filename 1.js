const array = [5,1,3]
const add = array.reduce((a, b) => a + b);
const multi = array.reduce((a, b) => a * b);
console.log(`${add} ${multi}`);