var removeElement = function (nums, val) {
  let k = 0;
  for (const x of nums) {
    if (x !== val) {
      nums[k++] = x;
    }
  }
  return k;
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2));