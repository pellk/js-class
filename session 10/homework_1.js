let m = [17, 15, 18.5, 19, 18.25, 19.5, 17.5, 19, 20, 16.5, 20, 18.75, 19.25];

for (let i = 0; i < m.length; i += 5) {
   console.log(m.slice(i, i + 5));
}
