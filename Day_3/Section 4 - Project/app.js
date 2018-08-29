/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*

***** 
LECTURE 48 CODE
****** 

*/

/* Variables */
var scores, roundScore, activePlayer, gamePlaying, previousDiceRoll;

init();

scores = [0,0]; //global (total) scores
roundScore = 0; //current score
activePlayer = 0; //0 = First Player, 1 = Second Player
previousDiceRoll = 0;

document.querySelector('.btn-roll').addEventListener('click',
function()
{
    if(gamePlaying)
    {

        var currentScore = document.getElementById('current-'+activePlayer);
        //Generate random dice number
        var dice = Math.floor(Math.random() * 6)+1; //1 to 6

        if (dice === previousDiceRoll && dice === 6)
        { 
            console.log("You rolled a "+dice+" twice in a row!");
            scores[activePlayer] = 0;
            document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
            nextPlayer();
            //Reset global score?
        }

        else
        {
            //Display dice value
            var diceDOM = document.querySelector('.dice');

            //Lecture 50 code

            diceDOM.style.display = 'block'; //unihde the dice
            diceDOM.src = 'images/dice-'+dice+'.png'; //set dice image using src property

            if (dice !== 1)
            {
                previousDiceRoll = dice;
                roundScore += dice;
                currentScore.textContent = roundScore; 
            }
            else
            {
                nextPlayer();
            }
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click',
function()
{
    if(gamePlaying)
    {
        scores[activePlayer] += roundScore;
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20)
        {
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
            gamePlaying = false;
        }

        else
        {
            nextPlayer();
        }

    }
    

    
});


function nextPlayer()
{
    //Changes the current active player and resets the score for the round
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    previousDiceRoll = 0;

    //Resets current round text on screen
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //Toggles one as active and the other as inactive
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //Hides the dice
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init()
{
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    previousDiceRoll = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    for (let i=0; i<2; i++)
    {
        document.getElementById('score-'+i).textContent = '0';
        document.getElementById('current-'+i).textContent = '0';

        document.getElementById('name-'+i).textContent = 'Player '+(i+1);
        document.querySelector('.player-'+i+'-panel').classList.remove('winner');
        document.querySelector('.player-'+i+'-panel').classList.remove('active');
        
    }

    document.querySelector('.player-0-panel').classList.add('active');
}