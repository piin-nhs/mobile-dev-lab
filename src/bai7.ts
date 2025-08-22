export class User {
    name: String;

    constructor (name: String){
        this.name = name;
    }

    public get _name() : String {
        return this.name;
    }

    public set _name(ten: String ) {
        this.name = ten;
    }
}