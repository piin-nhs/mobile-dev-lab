"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        var area = this.width * this.height;
        return area;
    }
    perimeter() {
        var perimeter = (this.width + this.height) * 2;
        return perimeter;
    }
}
exports.Rectangle = Rectangle;
