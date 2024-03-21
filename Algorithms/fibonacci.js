// Последовательност Фибоначчи
// Напиши функцию, которая будет генерировать последовательность Фиббоначи
// длинны n, которую передали как аргумент.

function fibonacci(n) {
    let array = [1, 1];
    if (n < 2) {
        return array.slice(0, n)
    }
    while (array.length < n) {
        const last = array[array.length - 1];
        const prev = array[array.length - 2];
        array.push(last + prev);
    }
    return array;
}

console.log(fibonacci(8)); //[1, 1, 2, 3, 5, 8, 13, 21]
