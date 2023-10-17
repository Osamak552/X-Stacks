export class CompanyLocationArray {
    constructor() {
        this.employees = [];
    }
    addPerson(person) {
        this.employees.push(person);
    }
    getCount() {
        return this.employees.length;
    }
    getPerson(index) {
        return this.employees[index];
    }
}
