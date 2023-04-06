// روش اول
// شرط‌های پی در پی

let s = '3M42XYZ920';

{
	let result = '';
	for (let c of s) {
		if (c === '0') {
			result += c;
		} else if (c === '1') {
			result += c;
		} else if (c === '2') {
			result += c;
		} else if (c === '3') {
			result += c;
		} else if (c === '4') {
			result += c;
		} else if (c === '5') {
			result += c;
		} else if (c === '6') {
			result += c;
		} else if (c === '7') {
			result += c;
		} else if (c === '8') {
			result += c;
		} else if (c === '9') {
			result += c;
		}
	}
	console.log(result);
}

// روش دوم
// حلفه تودرتو

{
	let digits = '0123456789';
	let result = '';
	for (let c of s) {
		for (const d of digits) {
			if (c === d) {
				result += c;
			}
		}
	}
	console.log(result);
}

// روش سوم
// مقایسه‌ی کد کاراکتر

{
	let result = '';
	for (let c of s) {		
		if (c >= '0')
		if (c <= '9') {
			result += c;
		}
	}
	console.log(result);
}

// روش چهارم
// عملگر &&

{
	let result = '';
	for (let c of s) {		
		if (c >= '0' && c <= '9') {
			result += c;
		}
	}
	console.log(result);
}
