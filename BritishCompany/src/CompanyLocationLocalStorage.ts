import {ILocation} from "./ILocation.js";
import {Employee} from "./Employee.js";

export class CompanyLocationLocalStorage implements ILocation {
    private readonly localStorageKey: string;
    constructor() {
        this.localStorageKey = "company_employees";
    }
    addPerson(person: Employee): void {
        const employees = this.getStoredEmployees();
        employees.push(person);
        localStorage.setItem(this.localStorageKey, JSON.stringify(employees));
        console.log("Data stored in localStorage:", employees);
    }

    getCount(): number {
        const employees = this.getStoredEmployees();
        return employees.length;
    }

    getPerson(index: number): Employee {
        const employees = this.getStoredEmployees();
        return employees[index];
    }
    private getStoredEmployees(): Employee[] {

        const storedData = localStorage.getItem(this.localStorageKey);
        if (storedData) {
            return JSON.parse(storedData).map((data: any) => new Employee(data.name,data.projects));
        }
        return [];
    }
}