import { Person } from "./bai1";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";
import { User } from "./bai7";
import { Product } from "./bai8";
import { Account } from "./bai10";
import { Dog } from "./bai11";
import { Cat } from "./bai11";
import { Bird } from "./bai12";
import { Fish } from "./bai12";
import { Circle, Square } from "./bai13";

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
user._name = "HoangSang";
console.log(user._name);

console.log("Bai 8")
const products: Product[] = [
    new Product("Laptop", 1200),
    new Product("Mouse", 25),
    new Product("Keyboard", 120),
]
const filtered = products.filter(p => p.price > 100);
filtered.forEach(p => console.log(p));

console.log("Bai 9")
console.log("Tao interface Animal (Done)")

console.log("Bai 10")
var account = new Account("HoangSang", "12345");
console.log(account)

console.log("Bai 11")
var cat = new Cat("Coco");
var dog = new Dog("Lucy");
cat.meow();
dog.bark();

console.log("Bai 12")
var bird = new Bird("Vet");
var fish = new Fish("Ro");
bird.fly();
fish.swim();

console.log("Bai 13")
const s = new Square(5);
console.log("Square area:", s.area());   
const c = new Circle(3);
console.log("Circle area:", c.area());  






