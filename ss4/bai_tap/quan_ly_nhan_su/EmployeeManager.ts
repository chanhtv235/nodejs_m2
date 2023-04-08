import {Employee} from "./Employee";

export class EmployeeManager {
    public static employeeList: Array<Employee>
        = [new Employee("chanh0", "12/12/2000", "gd"),
        new Employee("chanh1", "12/12/2000", "gd"),
        new Employee("chanh2", "12/12/2000", "gd")
    ];

    public display(): void {
        EmployeeManager.employeeList.forEach(e => {
            console.log(e.toString())
        })
    }
    public add(employee: Employee):void{
        EmployeeManager.employeeList.push(employee);
    }
    public delete(name: string): void{
       EmployeeManager.employeeList= EmployeeManager.employeeList.filter(e=> e.getName()!==name);
    }
}