# جلسه‌ی دوازدهم

## عملگر منطقی `&&`

هر گاه هم عبارت سمت چپ و هم عبارت سمت راست عملگر `&&` برابر `true` باشد، نتیجه‌ی کل عبارت هم `true` خواهد بود. مثلا، شرط زیر زمانی برقرار است که عدد `n` هم بیشتر از 0 هم کمتر از 100 باشد.

```js
if (n > 0 && n < 100)
```

در صورتی که عبارت اول (سمت چپ) نادرست (`false`) باشد، عبارت دوم (سمت راست) اصلا بررسی نمی‌شود چون تاثیری در نتیجه نخواهد داشت و نتیجه `false` خواهد بود.

## عملگر منطقی `||`

هر گاه حداقل یکی از عبارت‌های دو طرف عملگر `||` برابر `true` باشد، نتیجه‌ی کل عبارت هم `true` خواهد بود. مثلا، شرط زیر زمانی برقرار است که عدد `n` یا 0 و یا ‎-1 باشد.

```js
if (n === 0 || n === -1)
```

در صورتی که عبارت اول (سمت چپ) درست (`true`) باشد، عبارت دوم (سمت راست) اصلا بررسی نمی‌شود چون تاثیری در نتیجه نخواهد داشت و نتیجه `true` خواهد بود.

## تعریف متغیر با `const`

در صورتی که به جای `let`، متغیری را با `const` تعریف کنیم، آن متغیر به صورت ثابت تعریف شده و قابل تغییر نخواهد بود. مثلا کد زیر با خطا مواجه می‌شود زیرا `n` قابل تغییر نیست.

```js
const n = 5;
n = 6; // ERROR
```

توصیه می‌شود همه‌ی متغیرها را با `const` تعریف کنیم، مگر اینکه مجبور باشیم آنها را تغییر دهیم. به عنوان مثال برای حلقه‌ی `for of` همیشه باید از `const` استفاده کنیم.

```js
for (const n of [0, 1, 2, 3, 4, 5])
```

## تابع‌های `join` و `split`

کار تابع‌های `join` و `split` متضاد همدیگر است. تابع `join` اعضای آرایه را به صورت یک متن به هم متصل می‌کند و تابع `split` یک متن را به صورت یک آرایه از هم جدا می‌کند.

پارامتر ورودی این دو تابع متنی است که محل اتصال یا جداشدن را تعیین می‌کند.

در مثال زیر متن را در محل `/` از هم جدا می‌کنیم.

```js
const s = '06/04/2023';
const a = s.split('/');
// [ '06', '04', '2023' ]
```

و در این مثال آرایه‌ی ساخته شده را با `/` دوباره به هم می‌چسبانیم.

```js
const a = ['06', '04', '2023'];
const s = a.join('/');
// '06/04/2023'
```
