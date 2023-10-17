export class Frontend {
    constructor(name, projects) {
        this.name = name;
        this.projects = projects;
    }
    getCurrentProject() {
        return this.projects[this.projects.length - 1];
    }
    getName() {
        return this.name;
    }
    getProjectList() {
        return this.projects;
    }
}
