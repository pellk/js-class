// A

{
   let numbers = [3, 5, 2, 6, 8, 1];

   let sum = 0;
   for (let i = 0; i <= 5; i++) {
      sum += numbers[i];
   }
   console.log(sum / 6);
}

// B

{
   let numbers = [3, 5, 2, 6, 8, 1];

   let sum = 0;
   for (let i = 0; i <= 5; i++) {
      if (numbers[i] > 4) {
         sum += numbers[i];
      }
   }
   console.log(sum);
}

// C 

let numbers = [3, 5, 2, 6, 8, 1];

let count = 0;
for (let i = 0; i <= 5; i++) {
   if (numbers[i] % 2 == 0) {
      count++;
   }
}
console.log(count);
