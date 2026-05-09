/*
==: so sánh bằng giá trị, có thể khác kiểu dữ liệu nhưng giá trị giống nhau thì vẫn được coi là bằng nhau
===: so sánh bằng tuyệt đối, cả giá trị và kiểu dữ liệu phải giống nhau mới được coi là bằng nhau
!=: so sánh khác giá trị, có thể khác kiểu dữ liệu nhưng giá trị khác nhau thì được coi là khác nhau
!==: so sánh khác tuyệt đối, cả giá trị và kiểu dữ liệu phải khác nhau mới được coi là khác nhau
> : lớn hơn
< : nhỏ hơn
>=: lớn hơn hoặc bằng
<=: nhỏ hơn hoặc bằng
 */

var a = 10;
var b = "10";
var c = 10;

console.log(a!=b);
console.log(a!==b);
console.log(a == b); // true
console.log(a === b); // false
console.log(a != b); // false   
