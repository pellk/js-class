# خلاصه‌ی جلسه‌ی یازدهم

## داده‌ی متنی (`string`)

بین علامت نقل قول (qutoation mark) نوشته می‌شود. در زبان جاواسکریپت، استفاده از نقل قول تکی (`'`) یا دوتایی (`"`) تفاوتی ندارد. اما باید علامت باز و بسته یکی باشد.

```js
let a = 'Mariwan';
let b = "Mariwan";
```

برای پیمایش تک تک حروف `string` ‌می‌توانیم مانند آرایه از حلقه‌ی `for` و `[ ]` و `length` استفاده کنیم:

```js
let s = 'abcd';
for (let i = 0; i < s.length; i++) {
   console.log(s[i])
}
// a
// b
// c
// d
```
## کپی بخشی از متن (`slice`)

برای کپی کردن بخشی از متن `string` به کار می‌رود:

```js
let s1 = 'abcdef';
let s2 = s1.slice(1, 4);
// bcd
```

## جستجو (`includes`)

در صورتی که متن داخل پرانتز در متن اول موجود باشد، نتیجه `true` خواهد بود و در غیر این صورت `false`.

```js
let s = 'computer programming is fun';
console.log(s.includes('is'));
// true
console.log(s.includes('are'));
// false
```

متد `includes` را می‌توان برای جستجو در آرایه هم به کار برد:

```js
let s = [9, 12, 13, 10, 11];
console.log(s.includes(13));
// true
```

## حذف فاصله‌های ابتدا و انتها (`trim`)

کاراکترها (حروف) ابتدا و انتهای متن معمولا نامطلوب هستند و بهتر است حذف بشوند. دقت شود که متد `trim` متن اصلی را تغییر نمی‌دهد و یک کپی از آن برمی‌گرداند که فاصله‌های اول و آخر حذف شده است. در داخل پرانتز `trim` چیزی نوشته نمی‌شود.

```js
let e1 = '  newroz@gmail.com  ';
let e2 = e1.trim();
```

## تبدیل به حروف بزرگ (`toUpperCase`) و کوچک (`toLowerCase`)

  دو متد `toUpperCase` و `toLowerCase` مانند متد `trim` متن اصلی را تغییر نمی‌دهند و یک کپی تغییر یافته از آن را می‌گردانند. همچنین، مانند `trim` در پرانتز چیزی نوشته نمی‌شود.

```js
let name = 'John Smith';
console.log(name.toLowerCase());
// john smith
console.log(name.toUpperCase());
// JOHN SMITH

let name2 = 'jOHn sMIth';
console.log(name.toLowerCase() == name2.toLowerCase());
// true
```

برای اطمینان از برابری دو متن، معمولا مانند مثال بالا هر دو را به حروف کوچک یا بزرگ تبدیل می‌کنیم و سپس آنها را مقایسه می‌کنیم.

## حلقه `for of`

برای خلاصه‌تر نوشتن پیمایش (حرکت از ابتدا تا انتهای) متن و آرایه می‌توان از حلقه‌ی `for of` استفاده کرد. دو حلقه‌ی زیر دقیقا یک کار انجام می‌دهند.

```js
let s = 'abcde';

for (let i = 0; i < s.length; i++) {
   let c = s[i];
   console.log(c);
}

for (let c of s) {
   console.log(c);
}
```

بعد از `of` آرایه یا `string` نوشته می‌شود. حلقه از اولین تا آخرین عضو آن تک تک حرکت می‌کند.

 متغیر قبل از `of` نام موقت آن عضو را تعیین می‌کند. در مثال بالا با هر بار تکرار حلقه، متغیر `c` تغییر می‌کند و به حرفی از متن `s` تبدیل می‌شود.

 دقت شود که با حلقه‌ی `for of`  شماره‌ی اندیس عضو را نداریم در حالی که با حلقه‌ی `for` معمولی می‌توانیم با استفاده از متغیری مثل `i` شماره اندیس از صفر تا عضو آخر را داشته باشیم.