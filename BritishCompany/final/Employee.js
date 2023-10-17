export class Employee {
    constructor(name, projects) {
        this.name = name;
        this.projects = projects;
    }
    getCurrentProject() {
        return this.projects[this.projects.length - 1];
    }
    getProjectList() {
        return this.projects;
    }
    getName() {
        return this.name;
    }
}
