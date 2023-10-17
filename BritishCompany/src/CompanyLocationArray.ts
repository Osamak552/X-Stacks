import {ILocation} from "./ILocation.js";
import {Employee} from "./Employee.js";

export class CompanyLocationArray implements ILocation {
    private employees: Employee[] = [];

    addPerson(person: Employee): void {
        this.employees.push(person)
    }

    getCount(): number {
        return this.employees.length;
    }

    getPerson(index: number): Employee | undefined {
        return this.employees[index]
    }

}