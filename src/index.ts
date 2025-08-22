import { Person } from "./bai1";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";
import { User } from "./bai7";

console.log("Bai 1")
var person = new Person("NguyenHoangSang", 21);
console.log(person);
console.log("Bai 2")
var student = new Student("NguyenHoangSang", 21, 10);
student.displayInfoAll()
console.log("Bai 3")
var car = new Car("Honda","Ranger", 2022);
console.log(car);
console.log("Bai 4")
var rectangle = new Rectangle(10, 15);
console.log("Dien tich hinh chu nhat:", rectangle.area());
console.log("Chu vi hinh chu nhat:", rectangle.perimeter());
console.log("Bai 5")
var bankAccount = new BankAccount(0);
if(bankAccount.deposit(100)){
    console.log("Nap thanh cong\n" +  "So du: ", bankAccount);
}
if(bankAccount.withdraw(50)){
    console.log("Rut thanh cong\n" +  "So du: ", bankAccount);
}else{
    console.log("Rut that bai\n" +  "So du: ", bankAccount);
}
if(bankAccount.withdraw(100)){
    console.log("Rut thanh cong\n" +  "So du: ", bankAccount);
}else{
    console.log("Rut that bai\n" +  "So du: ", bankAccount);
}
console.log("Bai 6")
var book = new Book("LTDD","NHS", 2025);
book.displayInfo()
console.log("Bai 7")
var user = new User("NguyenHoangSang");
console.log(user._name);
user._name = "Sang";
console.log(user._name);


