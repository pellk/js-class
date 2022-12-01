// تابع قدر مطلق (abs)
{
	let a = 3;
	let b = 7;
	console.log(Math.abs(a - b));
}

// بازسازی عملکرد تابع قدر مطلق (abs)
{
	let n = 5;
	if (n < 0) {
		console.log(-n);
	} else {
		console.log(n);
	}
	console.log(n < 0 ? -n : n);
}

// تابع علامت (sign)
{
	console.log(Math.sign(c));
}

// بازسازی عملکرد تابع علامت (sign)
{
	let c = -5;
	if (c > 0) {
		console.log(1);
	} else if (c < 0) {
		console.log(-1);
	} else if (c == 0) {
		console.log(0);
	}
}

// بازسازی عملکرد تابع علامت (sign)
// با استفاده از عملگر سه بخشی (ternary operator)
{
	console.log(c > 0 ? 1 : (c < 0 ? -1 : 0));
}

// تعیین زوج و فرد با استفاده از عملگر سه بخشی (ternary operator)
{
	let n = 5;
	console.log(n % 2 == 1 ? 'fard' : 'zoj');
}