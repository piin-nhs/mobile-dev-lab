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
import { Developer, Manager } from "./bai14";
import { Book1, Library, User1 } from "./bai15";
import { Box } from "./bai16";
import { Logger } from "./bai17";
import { MathUtil } from "./bai18";
import { Animal1 } from "./bai19";
import { Dog1 } from "./bai19";
import { Cat1 } from "./bai19";
import { Bike, Car1, Vehicle } from "./bai20";
import { Repository } from "./bai21";
import { Stack } from "./bai22";
import { CardPayment, CashPayment, Payment } from "./bai23";
import { AirConditioner, Fan } from "./bai24";
import { Shape } from "./bai25";
import { Order, Product1 } from "./bai26";
import { Teacher } from "./bai27";
import { Cat2, Dog2 } from "./bai28";
import { Car2, Movable, Robot } from "./bai29";
import { School, Student1, Teacher1 } from "./bai30";

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

console.log("Bai 14")
const m = new Manager("Alice", 5000);
m.work();        
m.manageTeam();  
const d = new Developer("Bob", 4000);
d.work();      
d.writeCode();   

console.log("Bai 15");
const users: User1[] = [
    new User1("Alice"),
    new User1("Bob")
]
const lib = new Library(users);
lib.addBook(new Book1("Clean Code", "Robert C. Martin"));
lib.addBook(new Book1("Design Patterns", "GoF"));
console.log(lib)

console.log("Bai 16");
const stringBox = new Box<string>("Hello");
console.log(stringBox._value); 
stringBox._value = "World";
console.log(stringBox._value);

console.log("Bai 17");
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("A");
logger2.log("B");
console.log(logger1 === logger2);

console.log("Bai 18");
console.log(MathUtil.add(10, 5));       
console.log(MathUtil.subtract(10, 5));  
console.log(MathUtil.multiply(10, 5));
console.log(MathUtil.divide(10, 5));   

console.log("Bai 19");
const animals: Animal1[] = [
    new Dog1("Buddy"),
    new Cat1("Kitty"),
    new Animal1("Generic Animal")
];
animals.forEach(a => a.sound());

console.log("Bai 20");
const vehicles: Vehicle[] = [
    new Car1("Toyota"),
    new Bike("Giant")
];
vehicles.forEach(v => v.drive());

console.log("Bai 21");
const stringRepo = new Repository<string>();
stringRepo.add("Hello");
stringRepo.add("World");
console.log(stringRepo.getAll());

console.log("Bai 22");
const stack = new Stack<number>();
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
const payments: Payment[] = [
    new CashPayment(),
    new CardPayment()
];

payments.forEach(p => p.pay(100));

console.log("Bai 24");
const fan = new Fan();
fan.turnOn(); 
const ac = new AirConditioner();
ac.turnOn();

console.log("Bai 25");
Shape.describe();

console.log("Bai 26");
const order = new Order([
    new Product1("Laptop",1500,1),
    new Product1("Mouse", 25,2)
  ]
);
order.showOrder();

console.log("Bai 27");
const teacher = new Teacher("Sang", 21, "Toán");
teacher.introduce();

console.log("Bai 28");
const dog2 = new Dog2();
dog2.speak();
const cat2 = new Cat2();
cat2.speak(); 

console.log("Bai 29");
const movable: Movable[] = [new Car2(), new Robot()];
movable.forEach(o => o.move());

console.log("Bai 30");
const school = new School();
const teacher1 = new Teacher1("Alice", 35, "Math");
const teacher2 = new Teacher1("Bob", 40, "English");
const student1 = new Student1("Charlie", 16, 10);
const student2 = new Student1("Daisy", 17, 11);
school.addTeacher(teacher1);
school.addTeacher(teacher2);
school.addStudent(student1);
school.addStudent(student2);
school.displayInfo();











