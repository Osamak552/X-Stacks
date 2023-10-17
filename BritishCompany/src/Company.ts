import {Employee} from "./Employee.js";
import {ILocation} from "./ILocation.js";


export class Company {
    private _companyName: String;
    private _employersList: Array<Employee>;
    constructor(private location: ILocation) {
        this._employersList=[]
        this._companyName=""
    }

    get getProjectsList(): {name: string, projects: string []}[] {
        return this._employersList.map(employee => ({name:employee.getName(),projects:employee.getProjectList()}))
    }

    get getNamesList(): string[] {
        return this._employersList.map(employee => employee.getName());
    }

    set add(employee: Employee) {
        this._employersList.push(employee);
    }

    get companyName(): String {
        return this._companyName;
    }

    set setCompanyName(value: String) {
        this._companyName = value;
    }

    get employersList(): Array<Employee> {
        return this._employersList;
    }

    set employersList(value: Array<Employee>) {
        this._employersList = value;
    }
}