(function()
{
    var userScore = 0;

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
    
    Question.prototype.checkAnswer = function(answer)
    {

        if(answer !== 'quit')
        {
            if (answer === this.correctAnswer.toString())
            {
                console.log('Correct Answer');
                userScore++;
            }
    
            else
            {
                console.log('Incorrect Answer');
            }

            init();
        }

        else
        {
            console.log('Game ended! Your score was: '+userScore);
        }
        
    }
    
    function init()
    {
        var q1 = new Question('Is JavaScript the coolest programming language?', ['Yes', 'No'], 0);
        var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
        var q3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

        var questionsToAsk = [q1, q2, q3];
        var num = Math.floor(Math.random() * questionsToAsk.length);
        
        questionsToAsk[num].displayQuestion();
        
        var answer = (prompt('Please write the correct answer, type \'quit\' to exit.'));
        
        questionsToAsk[num].checkAnswer(answer);
    }

    init();
})();
