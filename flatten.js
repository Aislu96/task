//Плоский массив
//Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массив. В результате должны получить новый одномерный массив.

function flatten(array) {
    const res = [];
// пробегаемся по элементам массива
    for (let i = 0; i < array.length; i++) {
// проверяем является ли элемент массивом
        if (Array.isArray(array[i])) {
// через рекурсию сново прогоняем элемент массива
            const flat = flatten(array[i]);
// пробегаемся по элементам массива flat
            for (let j = 0; j < flat.length; j++) {
// добавляем еl в массив res
                res.push(flat[j]);
            }
// иначе добавляем el в массив res
        } else {
            res.push(array[i]);
        }
    }
    return res;
}

function flatten(array) {
    //Если вложенность неизвестна, но нужно получить из массива с вложенными элементами плоский массив, то передайте аргумент Infinity. Тогда метод рекурсивно обойдёт массив и сделает на его основе новый плоский.
    return array.flat(Infinity)
}

console.log(flatten([[1], [[2, 3]], [[[4]]]]));
