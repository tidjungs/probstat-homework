let cdf = 0;
for(let x=1; x<=9; x++) {
	let p = 10*Math.log10((x+1)/x);
	console.log(`P(${x}): ` + p.toFixed(2));
	cdf += p;
	console.log(`f(${x}): ` + cdf.toFixed(2) + '\n');
}