export class Employee {

    constructor(private name: string, private projects: Array<string>) {}
    get getCurrentProject():String {
        return this.getProjects[this.getProjects.length-1];
    }
    get getName(): string {
        return this.name;
    }

    set setName(value: string) {
        this.name = value;
    }

    get getProjects(): string[] {
        return this.projects;
    }

    set setProjects(value: string[]) {
        this.projects = value;
    }
}