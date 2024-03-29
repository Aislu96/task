let a = {
    firstName: 'Bill',
    lastName: 'Ivanov',
    sayName: function () {
        console.log(this.firstName);
    },
    sayLastName: () => {
        console.log(this.lastName);
    }
};

console.log(a.sayName());//Bill

let b = a.sayName;

console.log(b());//undefined

console.log(a.sayName.bind({firstName: 'Boris'})());//Boris

console.log(a.sayName());// Bill
console.log(a.sayLastName()); //undefined


a.sayName.bind({firstName: 'Boris'}).bind({firstName: 'Tom'})(); // Boris
a.sayLastName.bind({lastName: 'Petrov'})(); //undefined
