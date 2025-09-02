"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = exports.Car1 = void 0;
class Car1 {
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(`${this.brand} car is driving on the road.`);
    }
}
exports.Car1 = Car1;
class Bike {
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(`${this.brand} bike is pedaling on the street.`);
    }
}
exports.Bike = Bike;
