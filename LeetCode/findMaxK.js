var findMaxK = function(nums) {
    let value = 0;
    for(let i = 0; i <= nums.length; i++) {
        if(value < nums[i] && nums.includes(-nums[i])) {
            value = nums[i];
        }
    }
    return value !== 0 ? value : -1;
};

console.log(findMaxK([-1,2,-3,3]));
console.log(findMaxK([-1,10,6,7,-7,1]));
console.log(findMaxK([-10,8,6,7,-2,-3]));