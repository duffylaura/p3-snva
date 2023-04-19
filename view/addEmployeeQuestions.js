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

  // export default addEmployeeQuestions; 
  module.exports = addEmployeeQuestions; 