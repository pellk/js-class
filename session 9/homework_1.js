let s = [4, 1, -2, 3, -6, -5, 7];

let neg = [];
for (let i = 0; i < s.length; i++) {
   if (s[i] < 0) {
      neg.push(s[i]);
   }
}
console.log(neg);