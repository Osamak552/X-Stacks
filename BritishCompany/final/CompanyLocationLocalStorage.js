import { Employee } from "./Employee.js";
export class CompanyLocationLocalStorage {
    constructor() {
        this.localStorageKey = "company_employees";
    }
    addPerson(person) {
        const employees = this.getStoredEmployees();
        employees.push(person);
        localStorage.setItem(this.localStorageKey, JSON.stringify(employees));
        console.log("Data stored in localStorage:", employees);
    }
    getCount() {
        const employees = this.getStoredEmployees();
        return employees.length;
    }
    getPerson(index) {
        const employees = this.getStoredEmployees();
        return employees[index];
    }
    getStoredEmployees() {
        const storedData = localStorage.getItem(this.localStorageKey);
        if (storedData) {
            return JSON.parse(storedData).map((data) => new Employee(data.name, data.projects));
        }
        return [];
    }
}
