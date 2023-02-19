var singleNumber = function (nums) {
   return nums
      .sort()
      .filter((num, i) => num !== nums[i - 1] && num !== nums[i + 1]);
};
singleNumber([0,1,0,1,0,1,99]);
