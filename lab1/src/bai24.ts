abstract class Appliance {
    abstract turnOn(): void;
}

export class Fan extends Appliance {
    turnOn(): void {
        console.log("Fan is now running...");
    }
}

export class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("Air Conditioner is cooling...");
    }
}