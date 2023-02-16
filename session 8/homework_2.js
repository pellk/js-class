let n = [1, 3, 4, 5, 6, 12];

let sorted = true;
for (let i = 0; i < 6; i++) {
   if (n[i] > n[i + 1]) {
      sorted = false;
      break;
   }
}
if (sorted) {
   console.log('sorted');
} else {
   console.log('not sorted');
}