{
	let a = 3;
	let b = 4;
	let c = Math.sqrt(a ** 2 + b ** 2);
	console.log(c);
}

{
	let mn = Math.max(4, 3, 2, -1, 8);
	let mx = Math.min(4, 3, 2, -1, 8);
	console.log(mn);
	console.log(mx);
}

{
	//let angle = 3.1415926535 / 2;
	let angle = Math.PI / 2;
	console.log(Math.sin(angle));
}

{
	let d = 30;
	let r = d * Math.PI / 180;
	console.log(Math.sin(r));
}

{
	console.log(0.1 + 0.2)
}

{
	let b = 30000000000333333;
	if (b > 1e9)
		console.log(b / 1e9 + ' GB');
	else if (b > 1e6)
		console.log(b / 1e6 + ' MB');
	else if (b > 1e3)
		console.log(b / 1e3 + ' KB');
	else
		console.log(b + ' B');
}


