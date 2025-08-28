export interface Movable {
    move(): void;
}

export class Car2 implements Movable {
    move(): void {
        console.log("The car is driving on the road.");
    }
}

export class Robot implements Movable {
    move(): void {
        console.log("The robot is walking forward.");
    }
}