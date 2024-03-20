// Удаление всех повторяющихся значений в строке
// Напишите функцию, окторая принимает строку и возвращает новую в которой все дублирующиеся символы будут удалены.

// function removeDupes(str) {
//     let strNew = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str.includes(str[i]) && !strNew.includes(str[i])) {
//             strNew += str[i];
//         }
//     }
//     return strNew;
// }

function removeDupes(str) {
    return Array.from(new Set(str)).join('');
}

console.log(removeDupes('abcd'));
console.log(removeDupes('aabbccdd'));
console.log(removeDupes('abcddbca'));
console.log(removeDupes('abababcdcdcd'));
