// روش اول
{
	let s = 12255;

	let h = Math.floor(s / 3600);
	console.log(h + ' hours');
	let m = Math.floor((s - 3600 * h) / 60);
	console.log(m + ' minutes');
	let s2 = s - h * 3600 - m * 60;
	console.log(s2 + ' seconds');
}

// روش دوم
{
	let s = 12255;

	let h = Math.floor(s / 3600);
	let m = Math.floor(s % 3600 / 60);
	let s2 = s % 60;
	console.log(h + ' hours ' + m + ' minutes ' + s2 + ' seconds');
}
