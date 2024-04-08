//Вам дано целое число N. Ваша задача — выяснить, сколько подстрок внутри N делится на N поровну.
//
// Смущенный? Я разберу это для тебя.
//
// Допустим, вам дано целое число «877692».
//
// 8 does not evenly divide with 877692. 877692/8 = 109711 with 4 remainder.
//
// 7 does not evenly divide with 877692. 877692/7 = 125384 with 4 remainder.
//
// 7 does not evenly divide with 877692. 877692/7 = 125384 with 4 remainder.
//
// 6 evenly divides with 877692. 877692/6 = 146282 with 0 remainder.
//
// 9 does not evenly divide with 877692. 877692/9 = 97521 with 3 remainder.
//
// 2 evenly divides with 877692. 877692/2 = 438846 with 0 remainder.
// Однако мы не собираемся останавливаться на достигнутом. Нам нужно проверить ВСЕ подстроки внутри числа 877692.
//
// 87 does not evenly divide with 877692. 877692/87 = 10088 with 36 remainder.
//
// 77 does not evenly divide with 877692. 877692/77 = 11398 with 46 remainder.
//
// 76 does not evenly divide with 877692. 877692/76 = 11548 with 44 remainder.
//
// 69 does not evenly divide with 877692. 877692/69 = 12720 with 12 remainder.
//
//
// etc.
// Правила:
// -Если целое число равно 0, то оно НЕ делится ни на что без остатка.
// -Хотя N может делиться само на себя поровну, мы не учитываем его в конечном числе. Например:
//
// N = 23, the answer will be 0.
// -Если существует несколько экземпляров числа, они все учитываются. Например:
//
// N = 11, the answer will be 2
// Вход:
// Неотрицательное целое число.
//
// Выход:
// Сколько раз вы нашли целое число, которое делилось без остатка на N.

function getCount(n) {
    n = n.toString();
    let num = 0;
    let v = 1;
    while (n.length !== v) {
        for (let i = 0; i < n.length; i++) {
            let a = i + v;
            if (a > n.length) break;
            if (+n % +n.substring(i, a) === 0) {
                num++;
            }
        }
        v++;
    }
    return num;
}


getCount(123);
getCount(1230);
getCount(1);
getCount(1111111111);
