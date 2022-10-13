const test2 = (string) => {
   let stack = [];
   let map = {
      '(': ')',
      '[': ']',
      '{': '}',
   };
   let test = new listNode(1);
   for (let i = 0; i < string.length; i++) {
      if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
         stack.push(string[i]);
      } else {
         let last = stack.pop();
         if (string[i] !== map[last]) {
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
