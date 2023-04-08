import {EmployeeManager} from "./EmployeeManager";
import {Employee} from "./Employee";
// 1. Make sure you have Node and NPM installed
// 2. Run npm install prompt-sync in the terminal
// const prompt = require('prompt-sync')();
// // const pro = require('prompt-sync')()
// const name = prompt('What is your name?');
// console.log(`Hey there ${name}`);

// @ts-ignore
const prompt = require('prompt-sync')();
let choose :number =0;
let  employeeManager = new EmployeeManager();
let flag:boolean =true;
do {
    choose = +parseInt(prompt("Chọn chức năng" +
        "\n1.Display" +
        "\n2.Add" +
        "\n3.Delete\n"));

    switch (choose) {
        case 1:
            console.log("Hiện thị")
            employeeManager.display()
            break;
        case 2:
            console.log("Thêm mới");
            let name = prompt("nhập tên");
            let birthday = prompt("nhập ngày sinh");
            let position = prompt("nhập vị trí");
            let employee = new Employee(name,birthday,position);
            employeeManager.add(employee);
            break;
        case 3:
            console.log("Xoá");
            let nameDelete = prompt("nhập tên muốn xoá");
            employeeManager.delete(nameDelete);
            break;
        default:
            flag=false;
    }
}while (flag)



