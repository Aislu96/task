// Анаграммы
// Напишите функцию, которая проверяет, является ли все элементы в массиве анаграммами друг друга.
function allAnagrams(array) {
    const sorted = array.map(str => str.split('').sort().join(''));
    for (let i = 1; i < array.length; i++) {
        if (sorted[0] !== sorted[i]) {
            return false
        }
    }
    return true;
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd']));
console.log(allAnagrams(['abcd', 'bdXc', 'cabd']))
