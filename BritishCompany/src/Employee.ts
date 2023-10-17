export class Employee {
    constructor(private name: string, private projects: string[]) {}

    getCurrentProject(): string {
        return this.projects[this.projects.length-1];
    }

    getProjectList(): string[] {
        return this.projects;
    }
    getName(): string {
        return this.name;
    }
}