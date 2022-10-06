const test = (nums, target) => {
   if (nums.length < 4) return [];
   nums.sort((a, b) => a - b);
   let result = [];
   for (let i = 0; i < nums.length; i++) {
      let left = i + 1;
      let middle = i + 2;
      let right = nums.length - 1;
      let sum = 0;
      while (left < right) {
         sum = nums[i] + nums[left] + nums[middle] + nums[right];
         if (
            i !== left &&
            left !== middle &&
            middle !== right &&
            sum === target
         ) {
            console.log('yes')
            result.push([nums[i], nums[left], nums[middle], nums[right]]);
            while (nums[left + 1] === nums[left]) {
               left++;
            }
            while (nums[middle + 1] === nums[middle]) {
               middle++;
            }
            while (nums[right - 1] === nums[right]) {
               right--;
            }
            left++;
            middle++;
            right--;
         } else if (sum > target) {
            right--;
         } else {
            middle++;
         }
      }
      while (nums[i + 1] === nums[i]) i++;
   }
   console.log(result);

   return result;
};
test([4, 0, 5, -5, 3, 3, 0, -4, -5], 4);
// test([1, 0, -1, 0, -2, 2], 0);
// test([2, 2, 2, 2, 2], 8);
// test([0, 0, 0], 0);
// test([0, 0, 0, 0], 1);
