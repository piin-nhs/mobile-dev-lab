"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Product1 = void 0;
class Product1 {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
exports.Product1 = Product1;
;
class Order {
    constructor(products = []) {
        this.products = products;
    }
    calculateTotal() {
        return this.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
    }
    showOrder() {
        console.log("Order details:");
        this.products.forEach(p => {
            console.log(`- ${p.name} x${p.quantity} = ${p.price * p.quantity}`);
        });
        console.log(`Total: ${this.calculateTotal()}`);
    }
}
exports.Order = Order;
