const a = [{name: 'jai', age: 20}, {name: 'sri', age: 17}, {name: 'sakthi', age: 18}, {name: 'kavi', age: 19}, {name: 'lavi', age: 21}, {name: 'kavitha', age: 23}, {name: 'lavanya', age: 25}, {name: 'arun', age: 33}, {name: 'karthi', age: 30}, {name: 'priya', age: 28}, {name: 'shivani', age: 5}, {name: 'sam', age: 10}, {name: 'dhoni', age: 15},{name: 'deekshith', age: 9},{name: 'shivu', age: 5}, {name: 'akshana', age: 10}, {name: 'keerthi', age: 22}, {name: 'krishitha', age: 60}, {name: 'prakash', age: 43}, {name: 'vini', age: 40}, {name: 'mini', age: 18}]
const result = a.filter((data,index) => {
    return data.age > 18
});
console.log(result);