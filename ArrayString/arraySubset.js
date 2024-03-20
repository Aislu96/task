// Является ли массив подмножеством другого массива
// Напишите функцию, которая проверяет, является ли второй массив подмножеством первого.
// То есть  есть ли элементы второго массива в первом.

function arraySubset(source, subset) {
    if (source.length < subset.length) return false;
    return source.sort((a, b) => a - b).join('').includes(subset.sort((a, b) => a - b).join(''));
}

console.log(arraySubset([2, 1, 3], [1, 2, 3]));
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3]));
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3]));
console.log(arraySubset([1, 2], [1, 2, 3]));
