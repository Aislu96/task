// Своя функция Bind
// Реализуйте функцию bind

const user = {
    name: 'Aislu',
    age: 18,
    showUser: function (surname, profession) {
        console.log(this.name, surname, profession);
    }
}

const userTwo = {
    name: 'Rustem',
}


const userInfo = user.showUser.bind(userTwo);
userInfo('Kharisov', "Web-разработчик");
