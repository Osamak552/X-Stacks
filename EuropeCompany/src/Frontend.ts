import {Employee} from "./Employee.js";

export class Frontend extends Employee {
    constructor(name: string, projects: string[]) {
        super(name, projects);
    }
}