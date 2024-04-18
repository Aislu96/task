// 5 Получить единый массив из любимых пицц каждого друга
// ['cheese', 'pepperoni', 'salami', 'margarita', 'meat', 'fish'];

const friends = [
    {name: 'alex', pizzas: ['cheese', 'pepperoni']},
    {name: 'mike', pizzas: ['salami', 'margarita']},
    {name: 'stas', pizzas: ['meat']},
    {name: 'anna', pizzas: ['fish']}
]


const pizza = friends.reduce((accum, curr) => {
    return [ ...accum, ...curr.pizzas]
}, [])
console.log(pizza)
