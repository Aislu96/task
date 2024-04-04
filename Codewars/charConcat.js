//Учитывая строку, вам необходимо постепенно объединить первый символ слева и первый символ справа и «1», затем второй символ слева и второй символ справа и «2» и так далее.
//
// Если длина строки нечетная, отбросьте центральный элемент.
//
// Например:
//
// charConcat("abcdef")    == 'af1be2cd3'
// charConcat("abc!def")   == 'af1be2cd3' // same result



function charConcat(string) {
    if (string.length % 2 !== 0) {
        let x = Math.floor(string.length / 2)
        string = string.slice(0, x) + string.slice(x + 1);
    }
    let str = '';
    let num = 0;
    for (let i = 0; i < string.length / 2; i++) {
        num++;
        let s = string.length - i - 1
        str += string[i] + string[s] + `${num}`
    }
    return str;
}

charConcat("abc def");
charConcat("CodeWars");
