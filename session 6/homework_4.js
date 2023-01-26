{
   let n = 5;
   let result = '';
   for (let i = 0; i < n; i++) {
      result += '# ';
   }
   console.log(result);
   
   // # # #‌ # #
}


{
   let n = 5;
   let result = '';
   let dash = '';
   for (let i = 0; i < n; i++) {
      dash += '-';
      result += dash + '@';
   }
   console.log(result);

   // -@--@---@----@----@
}