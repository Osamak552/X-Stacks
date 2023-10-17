import {Company} from "./Company.js";
import {Frontend} from "./Frontend.js";
import {Backend} from "./Backend.js";


const company: Company = new Company();

company.companyName="Epam Systems"

const frontEndEmployee = new Frontend( "jack", ["Employee Management System","Bus Management System"]);

console.log(`Employee: ${frontEndEmployee.getName} current working project: `,frontEndEmployee.getCurrentProject)

const backEndEmployee = new Backend("rose",["student Management System"]);

company.add = frontEndEmployee
company.add = backEndEmployee

console.log(company.getProjectsList)
console.log(company.getNamesList)