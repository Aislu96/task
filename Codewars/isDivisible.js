// Создайте функцию, которая проверяет, делится ли первый аргумент n на все остальные аргументы (возвратите true, если нет других аргументов)
//
// Пример:
//
//     (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7

function isDivisible(...a){
    let num = 0;
    for(let i = 1; i < a.length; i++){
        if(a[0] % a[i] !== 0) {
            num++;
        }
    }
    return num === 0;
}


isDivisible(3,3,4);
isDivisible(12,3,4)
