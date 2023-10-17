import {Employee} from "./Employee.js";

export class Backend extends Employee {
    constructor(name: string, projects: string[]) {
        super(name, projects);
    }
}