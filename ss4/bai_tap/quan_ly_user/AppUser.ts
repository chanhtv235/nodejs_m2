import {Role} from "./Role";

export class AppUser {
    private _name:string;
    private _email:string;
    private _role:Role
    constructor(name:string,email:string,role:Role=Role.user) {
        this._name=name;
        this._email=email;
        this._role=role;
    }

    set name(value: string) {
        this._name = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set role(value: Role) {
        this._role = value;
    }

    public getInfo():string{
        return `name : ${this._name} email: ${this._email} role: ${this._role}`
    }
    public isAdmin(): string{
        return (this._role==1)?"là addmin ":"người dùng thông thường"
    }
}