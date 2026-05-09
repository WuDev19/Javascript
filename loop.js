// const myArray = [
//     42,
//     "JavaScript",
//     true,
//     { id: 1, name: "Gemini" },
//     [1, 2, 3],
//     null,
//     undefined,
//     Symbol("unique"),
//     9.99,
//     "Hà Nội"
// ];

const myArray = [1, 2, 3, 4, 5];
const tmp = myArray.map((value, index) => {
    return value * 2;
})
console.log(tmp);

for (let i = 0, j = myArray.length - 1; i < myArray.length && j >= 0; i++, j--) {
    console.log(`${myArray[i]} và ${myArray[j]}`); 
}
// for (const element of myArray) { //duyệt value
//     console.log(`${element} va loại dữ liệu: ${typeof element}`);
// }
// for (const e in myArray) { // duyệt index trong arr hoặc key trong obj
//     console.log(`${myArray[e]} va loại dữ liệu: ${typeof e}`);
// }
// let arr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
// let l = 0; let r = arr.length - 1;
// let input = prompt("Nhập vào số cần tìm: ");
// let result = false;
// while (l < r) {
//     let mid = (l + r) / 2;
//     if (arr[mid] === input) {
//         console.log(`Tìm thấy ${input} tại vị trí ${mid}`);
//         result = true;
//         break;
//     }
//     else if (arr[mid] < input) {
//         l = mid + 1;
//     }
//     else {
//         r = mid - 1;
//     }
// }
// if (result) {
//     console.log("Tìm thấy số cần tìm");
// }
// else {
//     console.log("Không tìm thấy số cần tìm");
// }
