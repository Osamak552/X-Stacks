import {IEmployee} from "./IEmployee.js";

export class Company {
    private _companyName: String;
    private _employersList: Array<IEmployee>;
    constructor() {
        this._companyName = ""
        this._employersList = []
    }
    get getProjectsList(): {name: string, projects: string []}[] {
        return this._employersList.map(employee => ({name:employee.getName(),projects:employee.getProjectList()}))
    }

    get getNamesList(): string[] {
        return this._employersList.map(employee => employee.getName());
    }

    set add(employee: IEmployee) {
        this._employersList.push(employee);
    }

    get companyName(): String {
        return this._companyName;
    }

    set companyName(value: String) {
        this._companyName = value;
    }

    get employersList(): Array<IEmployee> {
        return this._employersList;
    }

    set employersList(value: Array<IEmployee>) {
        this._employersList = value;
    }
}