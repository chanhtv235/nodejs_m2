export class Employee {
    private _name:string;
    private _birthday: string;
    private _position: string

    constructor(name: string, birthday: string, position: string) {
        this._name = name;
        this._birthday = birthday;
        this._position = position;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get birthday(): string {
        return this._birthday;
    }

    set birthday(value: string) {
        this._birthday = value;
    }

    get position(): string {
        return this._position;
    }

    set position(value: string) {
        this._position = value;
    }
    
}