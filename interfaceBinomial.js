const readline = require('readline');
import combi from './combi'

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let x;
let p;
let n;

const calculate = (x, p, n) => combi(n ,x)*Math.pow(p, x)*Math.pow(1 - p, n - x) 


rl.question('X: ', (X) => {
	x = X;
	rl.question('n: ', (N) => {
		n = N;
		rl.question('p: ', (P) => {
			p = P;
			let ans = calculate(x, p, n);
			console.log(ans.toFixed(3));
			rl.close();
		})
	})
})

