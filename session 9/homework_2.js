
{
   let s = [20, 30, 40, 50, 60];

   // روش اول
   // اضافه کردن عضو به انتها و جابه‌جا کردن اعضا

   s.push(undefined);
   for (let i = s.length - 1; i > 0; i--) {
      s[i] = s[i - 1];
   }
   s[0] = 10;
   console.log(s);
}

{
   let s = [20, 30, 40, 50, 60];

   // روش دوم
   // ساختن آرایه جدید

   let s2 = [];
   s2.push(10);
   for (let i = 0; i < s.length; i++) {
      s2.push(s[i]);
   }
   console.log(s2);
}

{
   let s = [20, 30, 40, 50, 60];

   // روش سوم
   // استفاده از
   // push

   let s2 = [];
   s2.push(10);
   s2.push(...s);
   console.log(s2);

   // ...
   // به معنی تک تک اعضا است
}

{
   let s = [20, 30, 40, 50, 60];

   // روش چهارم
   // استفاده از
   // unshift

   s.unshift(10);
   console.log(s);

   // unshift
   // به اول آرایه عضو اضافه می‌کند
}