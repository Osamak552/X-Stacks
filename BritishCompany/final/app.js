import { CompanyLocationLocalStorage } from "./CompanyLocationLocalStorage.js";
import { Company } from "./Company.js";
import { Employee } from "./Employee.js";
import { CompanyLocationArray } from "./CompanyLocationArray.js";
const arrayLocation = new CompanyLocationArray();
const localStorageLocation = new CompanyLocationLocalStorage();
const company1 = new Company(arrayLocation);
const company2 = new Company(localStorageLocation);
company1.setCompanyName = "Epam Systems";
company1.add = new Employee("rose", ["school Management System"]);
company1.add = new Employee("jack", ["Office Management System"]);
localStorageLocation.addPerson(new Employee("rose", ["student Management System"]));
localStorageLocation.addPerson(new Employee("jack", ["Employee Management System", "Bus Management System"]));
const person = localStorageLocation.getPerson(0);
console.log("verified:", person);
company2.setCompanyName = "TCS";
company2.add = new Employee("rose", ["student Management System"]);
company2.add = new Employee("jack", ["Employee Management System", "Bus Management System"]);
console.log("Hello welcome");
console.log(company1.getProjectsList);
console.log(company1.getNamesList);
console.log(company2.getProjectsList);
console.log(company2.getNamesList);
//the below lines should use in browser console to get content saved in localstorage.
// const storedData = localStorage.getItem("rose");
// console.log(JSON.parse(storedData));
