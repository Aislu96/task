// Повернута ли строка?
// Напишите фунцию, которая принимает 2 строки. Верните true если строки являются перевернутым
// вариантом друг друга. Иначе верните false.

function isStringRotated(source, test) {
    if (source.length !== test.length) return false;
    for (let i = 0; i < source.length; i++) {
        const rotate = source.slice(i, source.length) + source.slice(0, i);
        if (rotate === test) {
            return true;
        }
    }
    return false;
}

console.log(isStringRotated('javascript', 'scriptjava'));
console.log(isStringRotated('javascript', 'iptjavascr'));
console.log(isStringRotated('javascript', 'java'));
