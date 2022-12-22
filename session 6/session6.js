{
	n = n + 1
	n += 1
	n++
}

{
	n = n - 1
	n -= 1
	n--
}

{
	n = n * 2
	n *= 2
}

{
	n = n / 2
	n /= 2
}

{
	// فاکتوریل
	// factorial
	// 5! = 5 x 4 x 3 x 2 x 1

	let n = 50;
	let factorial = 1;
	for (let i = n; i >= 1; i--) {
		factorial *= i;
	}
	console.log(factorial);
}

// حلقه‌ی بی پایان
// دستور break
let n = 0;
for (; ;) {
	n++;
	if (n > 1000) {
		break;
	}
}
console.log(n)