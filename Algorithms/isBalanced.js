// Сбалансированные скобки
// Напишите функцию, которая проверит строку на сбалансированность скобок: {}, (), [].
// Вернуть true  если они сбалансированы, иначе false.
function isBalanced(string) {
    let str = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
            str += string[i];
        } else if (string[i] === ')' && str[str.length - 1] === '(') {
            str = str.slice(0, -1);
        } else if (string[i] === '}' && str[str.length - 1] === '{') {
            str = str.slice(0, -1);
        } else if (string[i] === ']' && str[str.length - 1] === '[') {
            str = str.slice(0, -1);
        }
    }
    return str.length === 0;
}

console.log(isBalanced('(x+y)-(4)')); // true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')); // true
console.log(isBalanced('[{()}]')); // true
console.log(isBalanced('(50)('));// false
console.log(isBalanced('[{]}')); //false
