const employees = [
    {name: 'jai', role: "software"},
    {name: 'sri', role: "hardware"}
];
const getEmployees = () => {
    setTimeout(() => {
        let output = ''
        employees.forEach((data,index) => {
          output += `<li>${data.name}</li>`
        });
        document.body.innerHTML = output;
    },2000)
};

const createEmployee = (data) => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            employees.push(data);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('went wrong')
            }
            console.log(employees)
        },2000)
    });
    
};

createEmployee({name: 'peter', rolre: "HR"}).then(
    getEmployees()
);
console.log(employees)




