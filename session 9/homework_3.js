let a = [2, 3, 6, 8, 11, 14, 15];

let mid = Math.floor(a.length / 2);

if (a.length % 2 == 0) {
   console.log((a[mid] + a[mid - 1]) / 2);
} else {
   console.log(a[mid]);
}