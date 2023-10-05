// class Employee {

//     protected name: string;
//     protected currentProject: string;

//     constructor(name: string, currentProject: string){
//         this.name = name;
//         this.currentProject = currentProject;
//     }

//     public getName(): string {
//         return this.name;
//     }
    
//     public getCurrentProject(): string {
//         return this.currentProject;
//     }

// }

// class Company {
//     protected employees: Employee[] = [];

//     addEmployee(employee: Employee): void {
//         this.employees.push(employee);
//     }

//     getProjectList(): string[] {
//         return this.employees.map(employee => employee.getCurrentProject());
//     }
    
//       getNameList(): string[] {
//         return this.employees.map(employee => employee.getName());
//     }
// }



// class Frontend extends Employee {
//     constructor(name: string, currentProject: string){
//         super(name, currentProject);
//     }
    
// }

// class Backend extends Employee {
//     constructor(name: string, currentProject: string){
//         super(name, currentProject);
//     }
// }


// const europeCompany = new Company();

// // Create several objects of Frontend and Backend employees
// const frontendEmployee1 = new Frontend("Frontend1", "ProjectA");
// const frontendEmployee2 = new Frontend("Frontend2", "ProjectB");
// const backendEmployee1 = new Backend("Backend1", "ProjectA");
// const backendEmployee2 = new Backend("Backend2", "ProjectC");

// // Add employees to the Company
// europeCompany.addEmployee(frontendEmployee1);
// europeCompany.addEmployee(frontendEmployee2);
// europeCompany.addEmployee(backendEmployee1);
// europeCompany.addEmployee(backendEmployee2);

// // Display the result of the getProjectList and getNameList methods in the console
// console.log("Project List:", europeCompany.getProjectList());
// console.log("Name List:", europeCompany.getNameList());


