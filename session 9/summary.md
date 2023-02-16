## طول آرایه (`length`)

برای به دست آوردن طول (تعداد اعضای) آرایه از `length` استفاده می‌کنیم. مثلا برای آرایه‌ی زیر، `length` برابر 3 است:
```js
let s = [7, 8, 6];
console.log(s.length);
// 3
```

## پیمایش آرایه (Iteration)

برای حرکت از ابتدا تا انتهای (یا به اصطلاح، پیمایش) آرایه از حلقه‌ی زیر استفاه می‌کنیم:

```js
for (let i = 0; i < array.length; i++) {
   // . . .
}
```

## جمع، میانگین، تعداد

```js
let sum = 0;
for (let i = 0; i < array.length; i++) {
   sum += array[i];
}
```

```js
let sum = 0;
for (let i = 0; i < array.length; i++) {
   sum += array[i];
}
let average = sum / array.length;
```

```js
let count = 0;
for (let i = 0; i < array.length; i++) {
   count++;
}
```

## حذف و اضافه به انتهای آرایه

تابع `push` مقداری را به انتهای آرایه اضافه می‌کند و تابع `pop` آخرین مقدار از انتهای آرایه را حذف می‌کند.

```js
let s = [6, 1, 3];

s.push(8);
// [6, 1, 3, 8]

s.pop();
// [6, 1, 3]
```

بدیهی است که `length` بعد از اجرای `push`  افزایش و بعد از اجرای `pop` کاهش می‌یابد.