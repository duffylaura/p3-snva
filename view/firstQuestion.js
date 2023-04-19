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

 // export default firstQuestion; 
 module.exports = firstQuestion; 