const a = [3,30,34,5,9]
const b = a.reverse();
b.splice(3,2,3,30);
const c = b.join("");
const d = JSON.stringify(c);
console.log(d);