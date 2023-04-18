const fs = require('fs'); 
const inquirer = require("inquirer");

// Define the Employee class
class Employee {
    constructor(name, age, id, contact, email) {
      this.name = name;
      this.age = age;
      this.id = id;
      this.contact = contact;
      this.email = email;
    }
  }

  employeeArray = []; 

  const firstQuestion = [
    {
        type: 'list', 
        message: "What would you like to do?",
        name: 'firstQuestionOptions', 
        choices: [
            "Add an Employee", 
            "View an Employee By Id", 
            "View an Employee By Name", 
            "View an Employee By Email", 
            "View All", 
            "Show Missing Database", 
            "End"
        ]
    }
  ]

  const addEmployeeQuestions = [
    {
        type: 'input', 
        name: 'name', 
        message: 'Enter employee full name', 
        //Name validator - Must be greater than two characters 
        validate: function (name) {
            if (name.length > 2) {
                return true;
            } else {
                console.log(".  Name must be greater than two characters.")
                return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'age', 
        message: 'Enter employee age', 
        //add in age validator must be greater than 18
        validate: function (age) {
            if (age > 18) {
                return true;
            } else {
                console.log(".  Age must be greater than 18 years old.")
                return false;
            }
        }
    }, 
    {
        type: 'input', 
        name: 'contact', 
        message: 'Enter employee contact', 
        //Not sure what is being looked for here or if needs a validator bc syntax could differ by country/region 
    }, 
    {
        type: 'input', 
        name: 'email', 
        message: 'Enter employee email', 
        //add in employee email validator 
        validate: function (email) {
  
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
    }
  ]; 

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

//function to initialize the application when the user types in node index.js in command line
function init() {
    questionDirectory();
  }
  
  //calling init function
  init();
  