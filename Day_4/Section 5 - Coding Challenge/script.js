//Ask question in console

//Pop up dialogue for user to answer question 

//Log to console if the user is correct

//1. Function Constructor 




var Question = function(question, answers, correctAnswer)
{
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;

    this.askQ = function()
    {
    
        console.log(question);
        for (var i=0; i<answers.length; i++)
        {
            console.log(i+': '+answers[i]);
        }

        var userInput = window.prompt(question);

        return function checkIfCorrect()
        {
            if (userInput === correctAnswer)
            {
                console.log("Correct Answer");
            }

            else
            {
                console.log("Incorrect Answer");
            }
        }

    }
}

var init = (function()
{
    var firstQ = new Question("Is JavaScript good?", ['Yes', 'No'], '0');
    var secondQ = new Question("What is my name?", ['Bob', 'John', 'Yusuf', 'Harry'], '2');
    var questionsToAsk = [firstQ, secondQ];

    var randomNumber = Math.floor(Math.random() * questionsToAsk.length);

    questionsToAsk[randomNumber].askQ()();
})();



