for(let x=1; x<=9; x++) {
	let p = 10*Math.log10((x+1)/x);
	console.log(`P(${x}): ` + p + '\n');
}