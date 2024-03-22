// https://www.codewars.com/kata/5865cff66b5699883f0001aa/solutions/javascript
// Испытание всех звездных кодов № 22
// Cоздайте функцию, которая принимает целочисленный аргумент, равный секундам, и преобразует это значение
// в строку, описывающую, сколько часов и минут составляют это количество секунд.
// Любые оставшиеся секунды игнорируются.
// Примечание.
// Вывод строки должен быть в определенной форме — «X часов и X минут».

function toTime(time) {
    let h = Math.floor(time / 3600);
    let m = Math.floor(time % 3600 / 60);
    return h + " hour(s) and " + m + " minute(s)";
}

console.log(toTime(3600));
console.log(toTime(3601));
console.log(toTime(3500));
console.log(toTime(323500));
console.log(toTime(0));
