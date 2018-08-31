

//Write method into the prototype property of Question

/* What I thought:
Question.prototype = function askQuestion()
{

}
How to actually do it (below)*/

(function()
{
    function Question(question, answers, correctAnswer)
    {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.displayQuestion = function()
    {
        console.log(this.question);
        for (var i=0; i<this.answers.length; i++)
        {
            console.log(i+': '+this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function()
    {
        if (answer === this.correctAnswer)
        {
            console.log('Correct Answer');
        }
    
        else
        {
            console.log('Incorrect Answer');
        }
    }
    
    var q1 = new Question('Is JavaScript the coolest programming language?', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    
    var questionsToAsk = [q1, q2, q3];
    var num = Math.floor(Math.random() * questionsToAsk.length);
    
    questionsToAsk[num].displayQuestion();
    
    var answer = parseInt(prompt('Please select the correct answer'));
    
    questionsToAsk[num].checkAnswer();222
})();
