let s = "The quick brown fox jumps over the lazy dog";

console.log(s.length);
let spaces = 0;
for (let c of s) {
  if (c === " ") {
    spaces++;
  }
}
console.log(spaces);