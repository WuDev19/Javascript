// let a = prompt("Nhập vào một số: ");
// if (a > 0) {
//     alert("Số dương");
// }
// else if (a < 0) {
//     alert("Số âm");
// }
// else {
//     alert("Số 0");
// }

//6 giá trị sau đây được coi là false trong JavaScript: false, 0, "", null, undefined và NaN. Tất cả các giá trị khác đều được coi là true.
//toán tử  && trả về giá trị cuối cùng nếu tất cả các giá trị đều đúng, ngược lại trả về giá trị sai đầu tiên
//nếu muốn giống như java thì chỉ cần để final value là true là ok;
let result = 'a' && 'b' && NaN && true;
console.log(result); 
if(result){
    console.log("Điều kiện đúng");
}
else{
    console.log("Điều kiện sai");
}

//toán tử || trả về giá trị đầu tiên nếu nó đúng, ngược lại trả về giá trị cuối cùng
let result2 = '' || 0 || null || undefined || NaN || 'c';
console.log(result2); 
if(result2){
    console.log("Điều kiện đúng");
}
else{
    console.log("Điều kiện sai");
}