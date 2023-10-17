import {Employee} from "./Employee.js";
export interface ILocation {
    addPerson(person: Employee): void;
    getPerson(index: number): Employee | undefined;
    getCount(): number;
}