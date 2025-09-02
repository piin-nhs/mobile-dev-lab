export class Box<T> {
    constructor(private value: T) {
    }

    get _value(): T {
        return this.value;
    }

    set _value(newValue: T) {
        this.value = newValue;
    }
}
