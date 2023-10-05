"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_localstorage_1 = require("node-localstorage");
const localStorage = new node_localstorage_1.LocalStorage('./scratch');
class Employee {
    constructor(name, currentProject) {
        this.name = name;
        this.currentProject = currentProject;
    }
    getCurrentProject() {
        return this.currentProject;
    }
    getName() {
        return this.name;
    }
}
class CompanyLocationArray {
    constructor() {
        this.persons = [];
    }
    addPerson(person) {
        this.persons.push(person);
    }
    getPerson(index) {
        return this.persons[index];
    }
    getCount() {
        return this.persons.length;
    }
}
class CompanyLocationLocalStorage {
    constructor(storageKey) {
        this.storageKey = storageKey;
    }
    addPerson(employee) {
        const storedEmployees = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
        storedEmployees.push(employee);
        localStorage.setItem(this.storageKey, JSON.stringify(storedEmployees));
    }
    getPerson(index) {
        const storedEmployees = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
        const employee = storedEmployees[index];
        return employee;
    }
    getCount() {
        const storedEmployees = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
        return storedEmployees.length;
    }
}
class Company {
    constructor(location) {
        this.location = location;
    }
    addEmployee(employee) {
        this.location.addPerson(employee);
    }
    getProjectList() {
        let totalEmployees = this.location.getCount();
        let projectList = [];
        for (let i = 0; i < totalEmployees; i++) {
            let employee = this.location.getPerson(i);
            projectList.push(employee.getCurrentProject());
        }
        return projectList;
    }
    getNameList() {
        const nameList = [];
        for (let i = 0; i < this.location.getCount(); i++) {
            nameList.push(this.location.getPerson(i).getName());
        }
        return nameList;
    }
}
const companyLocationArray = new CompanyLocationArray();
const indianCompanyArray = new Company(companyLocationArray);
indianCompanyArray.addEmployee(new Employee("Osama", "FrontEnd"));
indianCompanyArray.addEmployee(new Employee("Rohan", "BackEnd"));
console.log("Indian Company (Array) Project List:", indianCompanyArray.getProjectList());
console.log("Indain Company (Array) Name List:", indianCompanyArray.getNameList());
const companyLocationStorage = new CompanyLocationLocalStorage("IndainCompanyStorage");
const indianCompanyStorage = new Company(companyLocationStorage);
indianCompanyStorage.addEmployee(new Employee("Wick", "P1"));
indianCompanyStorage.addEmployee(new Employee("Jess", "P2"));
console.log("Indian Company (Local Storage) Project List:", indianCompanyStorage.getProjectList());
console.log("Indain Company (Local Storage) Name List:", indianCompanyStorage.getNameList());
//# sourceMappingURL=BritishCompany.js.map