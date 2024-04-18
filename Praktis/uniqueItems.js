const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const uniqueItems = (list) => {
    const unique = {};
    list.forEach(f => {
        unique[f] = true;
    })
    return Object.keys(unique);
}

console.log(uniqueItems(fruits));

//создать массив который содежит только уникальные значения
