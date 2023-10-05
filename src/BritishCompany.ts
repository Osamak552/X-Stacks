import { LocalStorage } from 'node-localstorage';

const localStorage = new LocalStorage('./scratch');

interface IEmployee {
    getCurrentProject(): string;
    getName(): string;
}

class Employee implements IEmployee{
  name: string;
  currentProject: string;
  
  constructor(name: string, currentProject: string) {
    this.name = name;
    this.currentProject = currentProject;
  }
  
  getCurrentProject(): string {
    return this.currentProject;
  }

  getName(): string {
      return this.name;
  }
}
  


interface ILocation {
    addPerson(person:IEmployee): void;
    getPerson(index: number):IEmployee;
    getCount():number;
}


class CompanyLocationArray implements ILocation {
    private persons: IEmployee[] = [];

    addPerson(person: IEmployee): void {
        this.persons.push(person);
    }

    getPerson(index: number): IEmployee {
        return this.persons[index];
    }

    getCount(): number {
        return this.persons.length;
    }

}

class CompanyLocationLocalStorage implements ILocation {
    private storageKey: string;
    
    constructor(storageKey: string) {
      this.storageKey = storageKey;
    }
  
    addPerson(employee: IEmployee): void {
      // Assuming localStorage is available
      const storedEmployees = JSON.parse(localStorage.getItem(this.storageKey) || '[]') as IEmployee[];
      storedEmployees.push(employee);
      localStorage.setItem(this.storageKey, JSON.stringify(storedEmployees));
    }
  
    getPerson(index: number): IEmployee {
      const storedEmployees = JSON.parse(localStorage.getItem(this.storageKey) || '[]') as IEmployee[];
      const employee:IEmployee = storedEmployees[index];
      return employee;
    }
  
    getCount(): number {
      const storedEmployees = JSON.parse(localStorage.getItem(this.storageKey) || '[]') as IEmployee[];
      return storedEmployees.length;
    }
  }

class Company {

  private location: ILocation;

  constructor(location: ILocation) {
    this.location = location;
  }

  addEmployee(employee:IEmployee) {
    this.location.addPerson(employee);

  }

  getProjectList():string[] {

    let totalEmployees:number =  this.location.getCount();
    let projectList:string[] = [];
    for (let i = 0; i < totalEmployees; i++) {
      let employee:IEmployee = this.location.getPerson(i);
      projectList.push(employee.getCurrentProject());
    }
    return projectList;
  }

  getNameList(): string[] {
    const nameList: string[] = [];
    for (let i = 0; i < this.location.getCount(); i++) {
      nameList.push(this.location.getPerson(i).getName());
    }
    return nameList;
  }
}

//----------------Array Storage------------------------

const companyLocationArray = new CompanyLocationArray();

const indianCompanyArray = new Company(companyLocationArray);

indianCompanyArray.addEmployee(new Employee("Osama","FrontEnd"));
indianCompanyArray.addEmployee(new Employee("Rohan","BackEnd"));

console.log("Indian Company (Array) Project List:", indianCompanyArray.getProjectList());
console.log("Indain Company (Array) Name List:", indianCompanyArray.getNameList());



//----------------Local Storage------------------------

const companyLocationStorage = new CompanyLocationLocalStorage("IndainCompanyStorage");

const indianCompanyStorage = new Company(companyLocationStorage);

indianCompanyStorage.addEmployee(new Employee("Wick","P1"));
indianCompanyStorage.addEmployee(new Employee("Jess","P2"));

console.log("Indian Company (Local Storage) Project List:", indianCompanyStorage.getProjectList());
console.log("Indain Company (Local Storage) Name List:", indianCompanyStorage.getNameList());

