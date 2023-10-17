export class Employee {
    constructor(name, projects) {
        this.name = name;
        this.projects = projects;
    }
    get getCurrentProject() {
        return this.getProjects[this.getProjects.length - 1];
    }
    get getName() {
        return this.name;
    }
    set setName(value) {
        this.name = value;
    }
    get getProjects() {
        return this.projects;
    }
    set setProjects(value) {
        this.projects = value;
    }
}
