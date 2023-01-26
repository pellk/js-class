let a = 0;
let b = 1;
for (; a < 100;) {
   console.log(a);
   let c = a + b;
   a = b;
   b = c;
}

// دنباله‌ی فیبوناچی
//https://fa.wikipedia.org/wiki/%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF_%D9%81%DB%8C%D8%A8%D9%88%D9%86%D8%A7%DA%86%DB%8C
