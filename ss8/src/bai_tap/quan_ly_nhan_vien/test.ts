import {EmployeeManagement} from "./EmployeeManager";
import {Employee} from "./Employee";

const employeeManagement = new EmployeeManagement();

employeeManagement.insertLast(new Employee("E-001", 1000000, 1));
employeeManagement.insertLast(new Employee("E-002", 2000000, 1));
employeeManagement.insertLast(new Employee("E-003", 3000000, 1));

employeeManagement.insertLast(new Employee("E-001", 500000, 2));
employeeManagement.insertLast(new Employee("E-002", 1500000, 2));
employeeManagement.insertLast(new Employee("E-003", 2000000, 2));

employeeManagement.insertLast(new Employee("E-001", 300000, 3));
employeeManagement.insertLast(new Employee("E-002", 1200000, 3));
employeeManagement.insertLast(new Employee("E-003", 1800000, 3));

console.log("======== Display all ========");

employeeManagement.showList();

console.log("======== Total salary ========");

const monthAndSalaryMap = employeeManagement.getTotalSalary();
for (let month of Array.from(monthAndSalaryMap.keys())) {
    console.log(
        `Month ${month} with total salary: ${monthAndSalaryMap.get(month)}`
    );
}

console.log("======== search month with max salary ========");

const monthWithMaxSalary = employeeManagement.getMonthWithMaxTotalSalary();

console.log(
    monthWithMaxSalary > 0 ? `Result = ${monthWithMaxSalary}` : "Not found data"
);