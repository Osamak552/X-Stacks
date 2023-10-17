import {Employee} from "./Employee.js";

export class Company {
    private _companyName: String;
    private _employersList: Array<Employee>;
    constructor() {
        this._companyName = ""
        this._employersList = []
    }
    get getProjectsList(): { name: string, projects: string[] }[] {
        return this._employersList.map(employee => ({ name: employee.getName, projects: employee.getProjects }));
    }

    get getNamesList(): string[] {
        return this._employersList.map(employee => employee.getName);
    }

    set add(employee: Employee) {
        this._employersList.push(employee);
    }

    get companyName(): String {
        return this._companyName;
    }

    set companyName(value: String) {
        this._companyName = value;
    }

    get employersList(): Array<Employee> {
        return this._employersList;
    }

    set employersList(value: Array<Employee>) {
        this._employersList = value;
    }
}