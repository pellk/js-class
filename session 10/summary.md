# خلاصه‌ی جلسه دهم

## مرتب کردن آرایه (`sort`)

```js
let s = ['c', 'a', 'd', 'b'];
s.sort();
// [ 'a', 'b', 'c', 'd' ]
```
متد `sort` آرایه را مرتب می‌کند، بنابراین آرایه را تغییر می‌دهد.

مرتب شدن به صورت متنی انجام می‌گیرد، حتی اگر محتویات آرایه عددی باشد. به همین دلیل کد کاراکترها ترتیب را تعیین می‌کند، نه ارزش عددی. در مثال زیر عدد 10 به خاطر کد کاراکتر 1 قبل از بقیه قرار می‌گیرد.

```js
let s = [2, 3, 10];
s.sort();
// [10, 2, 3]
```

## حذف و اضافه کردن اعضای آرایه (`splice`)

دو پارامتر ورودی `splice` شروع و تعداد حذف را مشخص می‌کنند. در مثال زیر از عضو اندیس 2 به تعداد 4 عضو حذف می‌شود.

```js
let s = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
s.splice(3, 4);
// [ 'a', 'b', 'g', 'h', 'i' ]
```

از پارامتر دوم `splice` یه بعد، هر پارامتر ورودی دیگر که نوشته شود، بعد از حذف اعضای آرایه در همانجا به آرایه اضافه می‌شود. در مثال زیر از عضو اندیس سوم 1 عضو حذف شده (یعنی حرف `d`) و 2 مورد به جای آن اضافه شده.

```js
let s = ['a', 'b', 'c', 'd', 'e'];
s.splice(3, 1, '###', '@@@');
// [ 'a', 'b', 'c', '###', '@@@', 'e' ]
```

با توجه به اینکه اگر پارامتر ورودی دوم صفر باشد، هیچ عضوی حذف نمی‌شود، می‌توان به این روش به هر جای آرایه عضو اضافه کرد.

```js
let s = [10, 20, 30];
s.splice(1, 0, 15);
// [ 10, 15, 20, 30 ]
s.splice(0, 0, 5);
// [ 5, 10, 15, 20, 30 ]
```

به عبارت دیگر `splice` کار `push` و `pop` و `shift` و `unshift` را هم انجام می‌دهد.

## کپی کردن بخشی از آرایه (`slice`)

```js
let s = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
let s2 = s.slice(4, 6);
// [ 'e', 'f' ]
```

دو پارامتر ورودی `slice‍` شروع و پایان کپی را مشخص می‌کند (بر خلاف `splice` که شروع و تعداد را مشخص می‌کرد). بنابراین در `slice‍` همیشه باید پارامتر دوم از پارامتر اول بزرگتر باشد.

توجه شود که `slice` تغییری در آرایه ایجاد نمی‌کند (برخلاف `splice`).

