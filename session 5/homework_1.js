
for (let i = 0; i <= 10; i = i + 1) {
	console.log(i);
}
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

for (let i = 0; i <= 10; i = i + 1) {
	console.log(i * 2);
}
// 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20


for (let i = 10; i >= 1; i = i - 1) {
	console.log(i);
}
// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

for (let i = 0; i <= 10; i = i + 1) {
	console.log(i % 2);
}
// 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 

for (let i = 0; i <= 11; i = i + 1) {
   console.log(i % 4);
}
// 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3

for (let i = -5; i <= 5; i = i + 1) {
   console.log(Math.abs(i));
}
// 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5