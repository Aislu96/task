// Строки и массивы
// Уникальность всех символов в строке
// Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: ‘a’ и ‘A’ разные символы.

// function isUnique(string) {
//     Пробегаемся по строке
//     for (let i = 0; i < string.length; i++) {
//         методом lastIndexOf ищем индекс последнего элемента
//         if (string.lastIndexOf(string[i]) !== i) {
//             return false;
//         }
//     }
//     return true;
// }

// function isUnique(string) {
//     записываем в коллекцию только уникальные значения строки, получаем количество уникальных значений методом size
//     сравниваем количество уникальных значений и длинной строки
//     return new Set(string).size === string.length
// }

// console.log(isUnique('abcdef'));
// console.log(isUnique('1234567'));
// console.log(isUnique('abcABC'));
// console.log(isUnique('abcadef'));
