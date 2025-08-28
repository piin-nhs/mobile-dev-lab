export class Product1 {
    constructor(public name: string,public price: number,public quantity: number){}
};

export class Order {
    private products: Product1[];

    constructor(products: Product1[] = []) {
        this.products = products;
    }


    calculateTotal(): number {
        return this.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
    }

    showOrder(): void {
        console.log("Order details:");
        this.products.forEach(p => {
            console.log(`- ${p.name} x${p.quantity} = ${p.price * p.quantity}`);
        });
        console.log(`Total: ${this.calculateTotal()}`);
    }
}