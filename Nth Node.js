var removeNthFromEnd = function ( head, n ) { 
   let array = head;
   array.splice( -n, 1 );
   console.log( array )
      return array;
   
};
removeNthFromEnd( [ 1, 2, 3, 4, 5 ], 2 ); 