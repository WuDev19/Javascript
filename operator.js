/**
 * +
 * -
 * *
 * **: lũy thừa
 * /
 * ++
 * --
 * %
 */

var a = 10;
var b = 20;

console.log(a + b); // 30
console.log(a - b); // -10
console.log(a * b); // 200
console.log(a / b); // 0.5
console.log(a % b); // 10  
console.log(a ** 2); // 100
console.log(a++); // 10, a = 11
console.log(++a); // 12, a = 12
console.log(a--); // 12, a = 11
console.log(--a); // 10, a = 10
console.log(a / 0); // Infinity
console.log(-a / 0); // -Infinity
console.log(0 / 0); // NaN
if(!Number.isFinite(10 / 0)){
    console.log("This is a infinite number");
}
if(Number.isNaN(0 / 0)) {
    console.log("This is not a number");
}
