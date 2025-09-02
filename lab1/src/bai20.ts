export interface Vehicle {
    brand: string;
    drive(): void;
}

export class Car1 implements Vehicle {
    constructor(public brand: string) {}

    drive(): void {
        console.log(`${this.brand} car is driving on the road.`);
    }
}

export class Bike implements Vehicle {
    constructor(public brand: string) {}

    drive(): void {
        console.log(`${this.brand} bike is pedaling on the street.`);
    }
}


