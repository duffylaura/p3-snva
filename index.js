// import questionDirectory() and useEmployeeQuestions function from question-functions.js view 
// import questionDirectory from './question-functions.mjs';
const questionDirectory = require('./view/question-functions'); 

//function to initialize the application when the user types in node index.js in command line
function init() {
    questionDirectory();
  }
  
//calling init function
init();
  