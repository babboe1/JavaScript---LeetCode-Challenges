const test = (str) => {
   let result;
   let strs = str.sort().reverse();
   if (strs.length === 1) {
      result = strs[0];
      console.log(result);
      return result;
   }

   let firstWord = strs[0].split('');
   let array = [];

   for (let i = 1; i < strs.length; i++) {
      let words = strs[i].split('');
      let prefixArray = [];
      if (firstWord[0] !== words[0]) {
         array = '';
         break;
      }

      for (let j = 0; j < words.length; j++) {
         if (firstWord[j] === words[j]) {
            prefixArray.push(words[j]);
            array = prefixArray;
         } else {
            array = prefixArray;
            break;
         }
      }
   }
   result = array === '' ? '' : array.join('');
   console.log(result);
   return result;
};
// test(['aaa', 'aa', 'aaa']);
// test(['dog', 'racecar', 'car']);
// test(['a']);
// test(['ab', 'a']);
test(['aaa', 'aa', 'aaa']);
