export class Company {
    constructor(location) {
        this.location = location;
        this._employersList = [];
        this._companyName = "";
    }
    get getProjectsList() {
        return this._employersList.map(employee => ({ name: employee.getName(), projects: employee.getProjectList() }));
    }
    get getNamesList() {
        return this._employersList.map(employee => employee.getName());
    }
    set add(employee) {
        this._employersList.push(employee);
    }
    get companyName() {
        return this._companyName;
    }
    set setCompanyName(value) {
        this._companyName = value;
    }
    get employersList() {
        return this._employersList;
    }
    set employersList(value) {
        this._employersList = value;
    }
}
