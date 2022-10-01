const letterCombinations = (digits) => {
   const letterMap = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
   };
   const result = [];
   if (digits.length < 2) {
      return digits.length === 1 ? letterMap[digits] : result;
   }

   const newArray = digits.split('').map((item) => letterMap[item]);
   for (let i = 0; i < newArray[0].length; i++) {
      for (let j = 0; j < newArray[1].length; j++) {
         if (newArray.length === 2) {
            result.push(newArray[0][i] + newArray[1][j]);
         } else {
            for (let k = 0; k < newArray[2].length; k++) {
               if (newArray.length === 3) {
                  result.push(newArray[0][i] + newArray[1][j] + newArray[2][k]);
               } else {
                  for (let l = 0; l < newArray.length; l++) {
                     if (newArray[3][l]) {
                        result.push(
                           newArray[0][i] +
                              newArray[1][j] +
                              newArray[2][k] +
                              newArray[3][l],
                        );
                     }
                  }
               }
            }
         }
      }
   }
   console.log(result);
   return result;
};
letterCombinations('5234');
