//Questions for finding Employee by ID
const findEmployeeByIdQuestions = [
    {
        type: 'input', 
        name: 'enteredId', 
        message: 'Enter the employee id',
        validate: function (enteredId) {
            if (enteredId >= 1) {
                return true; 
            } else {
                console.log("Employee Ids are numbers greater than or equal to 1"); 
                return false; 
            }
        }
    }
]

//Function to find employee by ID
function useEmployeeByIdQuestions() {
    inquirer.prompt(findEmployeeByIdQuestions).then(function(response) {
        for (i=0; i< employeeArray.length; i++) {
            if (employeeArray[i].id == response) {
                const data = `
                Employee name: ${employeeArray[i].name}
                Employee age: ${employeeArray[i].age}
                Employee id: ${employeeArray[i].id}
                Employee contact: ${employeeArray[i].contact}
                Employee Email: ${employeeArray[i].email}`
                console.log(data); 
            } else {
                console.log("An employee with this id does not exist.")
            }
        }
        questionDirectory(); 
    })
}; 