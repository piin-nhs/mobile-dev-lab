"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai11_2 = require("./bai11");
const bai12_1 = require("./bai12");
const bai12_2 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai19_1 = require("./bai19");
const bai19_2 = require("./bai19");
const bai19_3 = require("./bai19");
const bai20_1 = require("./bai20");
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_1 = require("./bai23");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
const bai26_1 = require("./bai26");
const bai27_1 = require("./bai27");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai30_1 = require("./bai30");
console.log("Bai 1");
var person = new bai1_1.Person("NguyenHoangSang", 21);
console.log(person);
console.log("Bai 2");
var student = new bai2_1.Student("NguyenHoangSang", 21, 10);
student.displayInfoAll();
console.log("Bai 3");
var car = new bai3_1.Car("Honda", "Ranger", 2022);
console.log(car);
console.log("Bai 4");
var rectangle = new bai4_1.Rectangle(10, 15);
console.log("Dien tich hinh chu nhat:", rectangle.area());
console.log("Chu vi hinh chu nhat:", rectangle.perimeter());
console.log("Bai 5");
var bankAccount = new bai5_1.BankAccount(0);
if (bankAccount.deposit(100)) {
    console.log("Nap thanh cong\n" + "So du: ", bankAccount);
}
if (bankAccount.withdraw(50)) {
    console.log("Rut thanh cong\n" + "So du: ", bankAccount);
}
else {
    console.log("Rut that bai\n" + "So du: ", bankAccount);
}
if (bankAccount.withdraw(100)) {
    console.log("Rut thanh cong\n" + "So du: ", bankAccount);
}
else {
    console.log("Rut that bai\n" + "So du: ", bankAccount);
}
console.log("Bai 6");
var book = new bai6_1.Book("LTDD", "NHS", 2025);
book.displayInfo();
console.log("Bai 7");
var user = new bai7_1.User("NguyenHoangSang");
console.log(user._name);
user._name = "HoangSang";
console.log(user._name);
console.log("Bai 8");
const products = [
    new bai8_1.Product("Laptop", 1200),
    new bai8_1.Product("Mouse", 25),
    new bai8_1.Product("Keyboard", 120),
];
const filtered = products.filter(p => p.price > 100);
filtered.forEach(p => console.log(p));
console.log("Bai 9");
console.log("Tao interface Animal (Done)");
console.log("Bai 10");
var account = new bai10_1.Account("HoangSang", "12345");
console.log(account);
console.log("Bai 11");
var cat = new bai11_2.Cat("Coco");
var dog = new bai11_1.Dog("Lucy");
cat.meow();
dog.bark();
console.log("Bai 12");
var bird = new bai12_1.Bird("Vet");
var fish = new bai12_2.Fish("Ro");
bird.fly();
fish.swim();
console.log("Bai 13");
const s = new bai13_1.Square(5);
console.log("Square area:", s.area());
const c = new bai13_1.Circle(3);
console.log("Circle area:", c.area());
console.log("Bai 14");
const m = new bai14_1.Manager("Alice", 5000);
m.work();
m.manageTeam();
const d = new bai14_1.Developer("Bob", 4000);
d.work();
d.writeCode();
console.log("Bai 15");
const users = [
    new bai15_1.User1("Alice"),
    new bai15_1.User1("Bob")
];
const lib = new bai15_1.Library(users);
lib.addBook(new bai15_1.Book1("Clean Code", "Robert C. Martin"));
lib.addBook(new bai15_1.Book1("Design Patterns", "GoF"));
console.log(lib);
console.log("Bai 16");
const stringBox = new bai16_1.Box("Hello");
console.log(stringBox._value);
stringBox._value = "World";
console.log(stringBox._value);
console.log("Bai 17");
const logger1 = bai17_1.Logger.getInstance();
const logger2 = bai17_1.Logger.getInstance();
logger1.log("A");
logger2.log("B");
console.log(logger1 === logger2);
console.log("Bai 18");
console.log(bai18_1.MathUtil.add(10, 5));
console.log(bai18_1.MathUtil.subtract(10, 5));
console.log(bai18_1.MathUtil.multiply(10, 5));
console.log(bai18_1.MathUtil.divide(10, 5));
console.log("Bai 19");
const animals = [
    new bai19_2.Dog1("Buddy"),
    new bai19_3.Cat1("Kitty"),
    new bai19_1.Animal1("Generic Animal")
];
animals.forEach(a => a.sound());
console.log("Bai 20");
const vehicles = [
    new bai20_1.Car1("Toyota"),
    new bai20_1.Bike("Giant")
];
vehicles.forEach(v => v.drive());
console.log("Bai 21");
const stringRepo = new bai21_1.Repository();
stringRepo.add("Hello");
stringRepo.add("World");
console.log(stringRepo.getAll());
console.log("Bai 22");
const stack = new bai22_1.Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
stack.pop();
stack.pop();
console.log(stack.isEmpty());
console.log("Bai 23");
const payments = [
    new bai23_1.CashPayment(),
    new bai23_1.CardPayment()
];
payments.forEach(p => p.pay(100));
console.log("Bai 24");
const fan = new bai24_1.Fan();
fan.turnOn();
const ac = new bai24_1.AirConditioner();
ac.turnOn();
console.log("Bai 25");
bai25_1.Shape.describe();
console.log("Bai 26");
const order = new bai26_1.Order([
    new bai26_1.Product1("Laptop", 1500, 1),
    new bai26_1.Product1("Mouse", 25, 2)
]);
order.showOrder();
console.log("Bai 27");
const teacher = new bai27_1.Teacher("Sang", 21, "Toán");
teacher.introduce();
console.log("Bai 28");
const dog2 = new bai28_1.Dog2();
dog2.speak();
const cat2 = new bai28_1.Cat2();
cat2.speak();
console.log("Bai 29");
const movable = [new bai29_1.Car2(), new bai29_1.Robot()];
movable.forEach(o => o.move());
console.log("Bai 30");
const school = new bai30_1.School();
const teacher1 = new bai30_1.Teacher1("Alice", 35, "Math");
const teacher2 = new bai30_1.Teacher1("Bob", 40, "English");
const student1 = new bai30_1.Student1("Charlie", 16, 10);
const student2 = new bai30_1.Student1("Daisy", 17, 11);
school.addTeacher(teacher1);
school.addTeacher(teacher2);
school.addStudent(student1);
school.addStudent(student2);
school.displayInfo();
