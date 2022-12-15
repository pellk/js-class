let h = 2;
let m = 40;

// با استفاده از
// if

if (m === 0) {
	console.log(h + ' oclock');
} else {
	if (m == 30) {
		console.log('half');
	} else if (Math.abs(m - 30) == 15) { // if (m == 15 || m == 45)
		console.log('a quarter');
	} else if (m > 30) {
		console.log((60 - m) + ' minutes');
	} else {
		console.log(m + ' minutes');
	}

	if (m > 30) {
		console.log('to ' + (h + 1));
	} else {
		console.log('past ' + h);
	}
}

// با استفاده از
// ternary

if (m === 0) {
	console.log(h + ' oclock');
} else {
	console.log(
		(m == 30 ? 'half '
		: Math.abs(m - 30) == 15 ? 'a quarter '
		: m > 30 ? ((60 - m) + ' minutes ')
		: (m  + ' minutes '))
	+ (m > 30 ? ('to ' + (h + 1))
		: ('past ' + h)));
}