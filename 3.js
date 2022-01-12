const a = [3,9,7,8];
const b = [3,6,8,9];
const c = a.concat(b);
const num = c.filter(function(data, index){
    return(index !== c.indexOf(data));
});
console.log(num);