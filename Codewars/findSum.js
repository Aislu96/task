// findSum(nums, target)
// На вход функции подается массив чисел nums и число target
// Вернуть из функции индексы двух чисел таким образом, что сумма чисел под этими индексами будет равно target

function findSum(nums, target) {
    for( let i = 0; i < nums.length; i++) {
        let value = target - nums[i];
        let index = nums.indexOf(value);
        if( value < 0) {
            return []
        } else if (index !== -1){
            return [nums[i], nums[index]]
        }
    }
}

console.log(findSum([1, 2, 3, 4, 5], 7));
console.log(findSum([9, 8, 4, 15, 23], 13));
console.log(findSum([17, 6, 34, 8], 1));
