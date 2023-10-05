// interface IEmployee {
//     getCurrentProject(): string;
//     getName(): string;
//   }
  
// class Frontend implements IEmployee {
//     private name: string;
//     private currentProject: string;
  
//     constructor(name: string, currentProject: string) {
//       this.name = name;
//       this.currentProject = currentProject;
//     }
  
//     getCurrentProject(): string {
//       return this.currentProject;
//     }
  
//     getName(): string {
//       return this.name;
//     }
//   }
  
// class Backend implements IEmployee {
//     private name: string;
//     private currentProject: string;
  
//     constructor(name: string, currentProject: string) {
//       this.name = name;
//       this.currentProject = currentProject;
//     }
  
//     getCurrentProject(): string {
//       return this.currentProject;
//     }
  
//     getName(): string {
//       return this.name;
//     }
//   }
  
//   class Company {
//     private employees: IEmployee[] = [];
  
//     add(employee: IEmployee): void {
//       this.employees.push(employee);
//     }
  
//     getProjectList(): string[] {
//       return this.employees.map(employee => employee.getCurrentProject());
//     }
  
//     getNameList(): string[] {
//       return this.employees.map(employee => employee.getName());
//     }
//   }
  
//   // Create an object of the Company class for the American Company
//   const americanCompany = new Company();
  
//   // Create several objects of Frontend and Backend employees for the American Company
//   const frontendEmployeeUS1 = new Frontend("FrontendUS1", "ProjectX");
//   const frontendEmployeeUS2 = new Frontend("FrontendUS2", "ProjectY");
//   const backendEmployeeUS1 = new Backend("BackendUS1", "ProjectX");
//   const backendEmployeeUS2 = new Backend("BackendUS2", "ProjectZ");
  
//   // Add employees to the American Company
//   americanCompany.add(frontendEmployeeUS1);
//   americanCompany.add(frontendEmployeeUS2);
//   americanCompany.add(backendEmployeeUS1);
//   americanCompany.add(backendEmployeeUS2);
  
//   // Display the result of the getProjectList and getNameList methods in the console for the American Company
//   console.log("American Company Project List:", americanCompany.getProjectList());
//   console.log("American Company Name List:", americanCompany.getNameList());
  