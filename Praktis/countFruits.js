const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// сколько раз каждый элемент встречается в массиве

function countFruits(list){
    const count = {}
    list.forEach(f => {
        if(!count[f]){
            count[f] = 1
        } else {
            count[f]++;
        }
    })

    return count;
}
console.log(countFruits(fruits));
