import fact from './fact'

let sum = 0;
let param = 20;
let minLength = 0;
let maxLength = 10;

Array.apply(null, Array(maxLength - minLength + 1))
	.map(() => {
		minLength++;
		return minLength - 1;
		// create array with number between minLength and maxLength (inclusive)
	})
	.map((x) => {
		let p = Math.pow(Math.E, -param) * Math.pow(param, x) / fact(x)
		console.log(`P(${x}): ` + p)
		sum += p
	});
console.log(`SUM = ` + sum);
// console.log(`ANS = ` + (1-sum));
