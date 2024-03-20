// Какая строка встречается чаще всего
// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве.
// Если таких строк несколько, то нужно вернуть первую, идя слева на право.

function highestFrequency(array) {
    let count = 0;
    let value = 1;
    let str = array[0];
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                count++;
            }
        }
        if (value < count) {
            value = count;
            str = array[i];
            count = 0
        } else  {
            count = 0
        }
    }
    return str;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])); // abc
console.log(highestFrequency(['abc', 'def'])); //abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi'])); // def
