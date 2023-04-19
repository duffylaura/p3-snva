const fs = require('fs'); 
const inquirer = require("inquirer");
//import employee class from model 
// import Employee from '../model/employee-class'; 
const Employee = require('../model/employee-class'); 

// import employee data array from model 
// import employeeArray from '../model/employee-data-array';
const employeeArray = require('../model/employee-data-array'); 

// import first question array from view 
// import firstQuestion from './firstQuestion';
const firstQuestion = require('./firstQuestion');

// import addEmployeeQuestions array from view
// import addEmployeeQuestions from './addEmployeeQuestions';
const addEmployeeQuestions = require('./addEmployeeQuestions'); 

//Function to direct user to next correct set of questions based on which option they chose 
function questionDirectory () {
    inquirer.prompt(firstQuestion).then(function(response){
        let selection = response.firstQuestionOptions; 
        if (selection === "Add an Employee" ) {
            useAddEmployeeQuestions(); 
        }
        if (selection === "View an Employee By Id") {
            useEmployeeByIdQuestions(); 
        }
        if (selection === "View an Employee By Name") {
            useEmployeeByNameQuestions(); 
        }
        if (selection === "View an Employee By Email" ) {
            useEmployeeByEmailQuestions(); 
        }
        if (selection === "View All" ) {
            useViewAll(); 
        }
        if (selection === "Show Missing Database") {
            useShowMissingDatabase(); 
        }
    })
}

//Function to prompt user with questions regarding adding an employee
function useAddEmployeeQuestions() {
    inquirer.prompt(addEmployeeQuestions).then(function (response){
        const idNumber = (employeeArray.length)+1
        const addedEmployeeObject = new Employee (
            response.name, 
            response.age, 
            idNumber,  
            response.contact, 
            response.email
        ); 
        employeeArray.push(addedEmployeeObject); 
        const data = `
        Employee name: ${addedEmployeeObject.name}
        Employee age: ${addedEmployeeObject.age}
        Employee id: ${addedEmployeeObject.id}
        Employee contact: ${addedEmployeeObject.contact}
        Employee Email: ${addedEmployeeObject.email}` 
        // check that write file is working 
        fs.writeFile(`${idNumber}.txt`, data, (err) => {
            if (err) {
                console.log(err); 
            } else {
                console.log("File written successfully.")
            }
        })
        questionDirectory(); 
    })
}

// export default questionDirectory; 
module.exports = questionDirectory; 