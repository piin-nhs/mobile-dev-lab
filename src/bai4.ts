export class Rectangle {
    width: number;
    height: number;

    constructor (width: number, height: number){
        this.width = width;
        this.height = height;
    }

    area(): number {
        var area = this.width * this.height;
        return area;
    }

    perimeter(): number {
        var perimeter = (this.width + this.height) * 2;
        return perimeter;
    }
}