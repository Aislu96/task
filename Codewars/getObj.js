// написать реализацию метода, который ищет значение в объекте.

let obj = {a: 1, b: {c: 2}, d: 3};

function get(obj, str) {
    let arr = str.split('.');
    let result = obj;
    for (let i = 0; i < arr.length; i++) {
        result = result[arr[i]];
    }
    return result;
}

console.log(get(obj, 'b.c'));// вернет 2
console.log(get(obj, 'd')); // вернет 3
