
const test2 = (string) => {
   let array = Array.from(string);
   let stack = [];
   let map = {
      '(': ')',
      '[': ']',
      '{': '}',
   };
   for (let i = 0; i < array.length; i++) {
      if (array[i] === '(' || array[i] === '[' || array[i] === '{') {
         stack.push(array[i]);
      } else {
         let last = stack.pop();
         if (array[i] !== map[last]) {
            console.log(false);
            return false;
         }
      }
   }  
   if (stack.length !== 0) {
      console.log(false);
      return false;
   }
   console.log(true);
   return true;
};
test2('{(])');



