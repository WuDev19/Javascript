var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;  
//string trong js cũng bất biến như trong java
console.log(`hello mọi người tôi tên là: ${fullName}`); // Output: John Doe
console.log(fullName.length)
console.log(fullName.toUpperCase()) // JOHN DOE
console.log(fullName.toLowerCase()) // john doe
console.log(fullName.indexOf("o")) // 1
console.log(fullName.slice(0, 4)) // John
console.log(fullName.replace("John", "Jane")) // Jane Doe  
console.log(fullName.split(" ")) // ["John", "Doe"]
console.log(fullName.includes("Doe")) // true
console.log(fullName.startsWith("John")) // true
console.log(fullName.endsWith("Doe")) // true   
console.log(fullName.concat(" is a developer.")) // John Doe is a developer.
console.log(fullName.toLocaleLowerCase('vi-VN')) // cái này lowercase theo vị trí người dùng