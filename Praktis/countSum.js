//4. Написать функцию, которая принимает два аргумента:
// массив из уникальных целых чисел и умму в виде цлого числа.
// Если сумма двух любых чисел массива из аргумента равно числу,
// которое приходит вторым аргументом, функция должна вернуть новый массив из этих чисел в любом порядке.
//Если решения нет, вернуться пустой массив.


const myNumbers = [3, 5, -4, 8 , 11, 1, -1, 6];

const sum = 10;


function countSum(arr, sum){
    for( let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if( arr[i] + arr[j] === sum) {
                return [arr[i], arr[j]]
            }
        }
    }
    return [];
}

console.log(countSum(myNumbers, sum));
