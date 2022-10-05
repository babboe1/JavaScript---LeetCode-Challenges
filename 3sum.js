const test = (str) => {
   str.sort((a, b) => a - b);
   console.log(str.sort());
   console.log(str.sort((a, b) => a - b));
   let array = [];
   for (let i = 0; i < str.length; i++) {
      let left = i + 1;
      let right = str.length - 1;
      let sum = 0;
      while (left < right) {
         sum = str[i] + str[left] + str[right];
         if (sum === 0) {
            array.push([str[i], str[left], str[right]]);
            while (str[left + 1] === str[left]) {
               left++;
            }
            while (str[right - 1] === str[right]) {
               right--;
            }
            left++;
            right--;
         } else if (sum < 0) {
            left++;
         } else {
            right--;
         }
      }
      while (str[i + 1] === str[i]) i++;
   }
   console.log( array );
   for (let index = 0; index < 70000; index++) {
      const element = index;
      const elements = index + 1;
   }
   return array;
};
test([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
