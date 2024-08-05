var searchInsert = function (nums, target) {
    if (nums.indexOf(target) === -1) {
        for (let i = 0; i <= nums.length;) {
            if (nums[i] < target) {
                i++;
            } else {
                return i
            }
        }
    } else {
        return nums.indexOf(target);
    }
};

console.log(searchInsert([1, 3, 5, 6], 7))