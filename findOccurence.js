var strStr = function (haystack, needle) {
   if (!haystack.includes(needle)) return -1;
   const hay = haystack.split('');
   const ned = needle.split('');
   let id = 0;
   for ( let i = 0; i <= haystack.length - needle.length; id++ ) {
      for (let j = 0; j < needle.length; j++) {
         console.log(i,id,j);
         if (hay[i] === ned[j]) {
            i++;
         } else {
            i = id + 1;
            break;
         }
         if (j === needle.length - 1) {
            console.log(id);
            return id;
         }
      }
   }
};

strStr('hello', 'll');
