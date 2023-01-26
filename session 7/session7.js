// Nested Loop
// حلقه‌ی تودرتو

let result = '';
for (let i = 1; i <= 10; i++) {
   for (let j = 1; j <= 10; j++) {
      result += (i * j) + '\t'; // tab
   }
   result += '\n'; // new line
}
console.log(result);