// Если не можешь заснуть, просто посчитай овец!!
//
// Задача:
// 3Например, если задано неотрицательное целое число, верните строку с ропотом:
// "1 sheep...2 sheep...3 sheep...". Ввод всегда будет действительным, т.е. отрицательных целых чисел не будет.

let countSheep = function (num){
    let result = '';
    if( num === 0){
        return ''
    } else if( num > 0) {
        for (let i = 1; i <= num; i++) {
            result += `${i} sheep...`
        }
    }
    return result;
}
