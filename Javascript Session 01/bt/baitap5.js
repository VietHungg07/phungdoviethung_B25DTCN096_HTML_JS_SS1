let bookName = prompt("Nhập tên sách: ");
let year = prompt("Nhập năm xuất bản sách:");
let bookOld = new Date().getFullYear()-year;

console.log("Sách: ",bookName);
console.log("Năm xuất bản: ",year);
console.log("Tuổi sách: ",bookOld);