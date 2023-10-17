import {IEmployee} from "./IEmployee.js";

export class Frontend implements IEmployee {

    constructor(private name: string,private projects:string[]) {}
    getCurrentProject(): string {
        return this.projects[this.projects.length-1];
    }
    getName(): string {
        return this.name;
    }

    getProjectList(): string[] {
        return this.projects;
    }

}