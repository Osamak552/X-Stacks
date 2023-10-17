export class Company {
    constructor() {
        this._companyName = "";
        this._employersList = [];
    }
    get getProjectsList() {
        return this._employersList.map(employee => ({ name: employee.getName, projects: employee.getProjects }));
    }
    get getNamesList() {
        return this._employersList.map(employee => employee.getName);
    }
    set add(employee) {
        this._employersList.push(employee);
    }
    get companyName() {
        return this._companyName;
    }
    set companyName(value) {
        this._companyName = value;
    }
    get employersList() {
        return this._employersList;
    }
    set employersList(value) {
        this._employersList = value;
    }
}
