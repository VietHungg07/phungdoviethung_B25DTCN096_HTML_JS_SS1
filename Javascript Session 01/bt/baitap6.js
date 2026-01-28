let bookName = prompt("Nhập tên sách: ");
let bookNumber = prompt("Nhập số thứ tự sách:");

let bookId = "LIB"+ "-" + bookName + "-" + bookNumber;

console.log("Tên sách: ",bookName);
console.log("Mã sách chuẩn hóa:",bookId);