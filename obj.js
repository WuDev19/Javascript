let sv = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    getName: function () { // arrow func thì sẽ lấy this của scope mà nó được định nghĩa (obj thì ko tạo scope, func thì khác)
        return this.name;
    },
    setName: function (newName) {
        if (typeof newName === "number") {
            console.error("Name must be a string");
            return;
        }
        this.name = newName;
    }
}
let sv2 = {
    name: "Jane",
    age: 25,
    city: "Los Angeles",
    address: {
        street: "456 Oak Ave",
        city: "Los Angeles",
        state: "CA"
    },
    getName: function () { // arrow func thì sẽ lấy this của scope mà nó được định nghĩa (obj thì ko tạo scope, func thì khác)
        return this.name;
    },
    setName: function (newName) {
        if (typeof newName === "number") {
            console.error("Name must be a string");
            return;
        }
        this.name = newName;
    }
}
//tạo mới hoặc update một thuộc tính của object
sv.name = "Johnson"; //update thuộc tính
sv.nationalId = "123456789"; //thêm thuộc tính
console.log(sv); // Output: John
delete sv.nationalId; //xóa thuộc tính

console.log(sv);
console.log(sv.getName()); // Output: Johnson 
sv.setName("Smith");
sv.setName(123); // Output: Name must be a string
const students = [sv, sv2];
for(const sv1 of Object.values(sv)) { // lấy value của obj sv
    console.log(sv1);
}
for (const key in sv) { // lấy key của obj sv
    console.log(key);
}
for(const [key, value] of Object.entries(sv)) { // lấy key và value của obj sv
    console.log(`${key} và ${value}`);
}