"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var Employee_1 = require("./Employee");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.prototype.display = function () {
        EmployeeManager.employeeList.forEach(function (e) {
            console.log(e.toString());
        });
    };
    EmployeeManager.prototype.add = function (employee) {
        EmployeeManager.employeeList.push(employee);
    };
    EmployeeManager.prototype["delete"] = function (name) {
        EmployeeManager.employeeList = EmployeeManager.employeeList.filter(function (e) { return e.getName() !== name; });
    };
    EmployeeManager.employeeList = [new Employee_1.Employee("chanh0", "12/12/2000", "gd"),
        new Employee_1.Employee("chanh1", "12/12/2000", "gd"),
        new Employee_1.Employee("chanh2", "12/12/2000", "gd")
    ];
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
