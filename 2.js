const array = [1, 2, 4, 5, 4, 7, 8, 7, 7, 3, 6];
const num = array.filter(function(data, index){
    return(index !== array.indexOf(data));
});
console.log(num);