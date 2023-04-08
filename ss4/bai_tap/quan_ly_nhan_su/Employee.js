"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, birthday, position) {
        this._name = name;
        this._birthday = birthday;
        this._position = position;
    }
    Employee.prototype.getName = function () {
        return this._name;
    };
    Employee.prototype.setName = function (value) {
        this._name = value;
    };
    Employee.prototype.getBirthday = function () {
        return this._birthday;
    };
    Employee.prototype.setBirthday = function (value) {
        this._birthday = value;
    };
    Employee.prototype.getPosition = function () {
        return this._position;
    };
    Employee.prototype.setPosition = function (value) {
        this._position = value;
    };
    Employee.prototype.toString = function () {
        return "name : ".concat(this._name, " birthday ").concat(this._birthday, " position ").concat(this._position);
    };
    return Employee;
}());
exports.Employee = Employee;
