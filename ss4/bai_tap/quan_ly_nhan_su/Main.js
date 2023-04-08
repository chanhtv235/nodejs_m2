"use strict";
exports.__esModule = true;
var EmployeeManager_1 = require("./EmployeeManager");
var Employee_1 = require("./Employee");
// 1. Make sure you have Node and NPM installed
// 2. Run npm install prompt-sync in the terminal
// const prompt = require('prompt-sync')();
// // const pro = require('prompt-sync')()
// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);
// @ts-ignore
var prompt = require('prompt-sync')();
var choose = 0;
var employeeManager = new EmployeeManager_1.EmployeeManager();
var flag = true;
do {
    choose = +parseInt(prompt("Chọn chức năng" +
        "\n1.Display" +
        "\n2.Add" +
        "\n3.Delete\n"));
    switch (choose) {
        case 1:
            console.log("Hiện thị");
            employeeManager.display();
            break;
        case 2:
            console.log("Thêm mới");
            var name_1 = prompt("nhập tên");
            var birthday = prompt("nhập ngày sinh");
            var position = prompt("nhập vị trí");
            var employee = new Employee_1.Employee(name_1, birthday, position);
            employeeManager.add(employee);
            break;
        case 3:
            console.log("Xoá");
            var nameDelete = prompt("nhập tên muốn xoá");
            employeeManager["delete"](nameDelete);
            break;
        default:
            flag = false;
    }
} while (flag);
