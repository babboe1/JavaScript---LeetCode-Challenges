var romanToInt = function (s) {
   let map = {
      0: 0,
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900,
   };

   let array = Array.from(s);
   let splice = [];
   for (let i = 0; i < array.length; i++) {
      let a = array[i] + array[i + 1];
      if (
         a === 'IV' ||
         a === 'IX' ||
         a === 'XL' ||
         a === 'XC' ||
         a === 'CD' ||
         a === 'CM'
      ) {
         array.splice(i, 2, '0', '0');
         splice.push(a);
      }
   }
   return [...array, ...splice].reduce((a, b) => a + map[b], 0);
};
