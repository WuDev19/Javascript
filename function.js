var onClick = function () { // muốn thực thi thì phải gọi sau khi được dịnh nghĩa
    alert("Hello World");
}
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10));
onClick();

//arrow func 
console.log(((a, b) => { //arrow func này trả về giá trị thì phải gán hoặc thực thi trong nơi khác để lấy được giá trị trả về
    return a - b;
})(10, 5)
)

let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(10, 5));

//hoặc 
let multiply1 = (a, b) => a * b;
console.log(multiply1(10, 5));

