export class Employee {
    private _name:string;
    private _birthday: string;
    private _position: string

    constructor(name: string, birthday: string, position: string) {
        this._name = name;
        this._birthday = birthday;
        this._position = position;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getBirthday(): string {
        return this._birthday;
    }

    setBirthday(value: string) {
        this._birthday = value;
    }

    getPosition(): string {
        return this._position;
    }

    setPosition(value: string) {
        this._position = value;
    }
    public toString(): string {
        return `name : ${this._name} birthday ${this._birthday} position ${this._position}`;
    }
}