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
var scores, roundScore, activePlayer;

scores = [0,0]; //global (total) scores
roundScore = 0; //current score
activePlayer = 0; //0 = First Player, 1 = Second Player

//querySelector: Selects the first instance of the stated element
//textContent: The text content of a nodes AND descendants - MDN
//innerHTML: used to set the HTML of an element, unlike textContent

for (let i=0; i<2; i++)
{
    document.getElementById('score-'+i).textContent = 0;
    document.getElementById('current-'+i).textContent = 0;
}

//Changing the style: element.style.CSSPropertyHere = 'CSSValueHere'
//Initially, dice is hidden
document.querySelector('.dice').style.display = 'none';

/*

***** 
LECTURE 49 CODE
****** 

*/

document.querySelector('.btn-roll').addEventListener('click',
function()
{
    //Generate random dice number
    var dice = Math.floor(Math.random() * 6)+1; //1 to 6

    //Display dice value
    var diceDOM = document.querySelector('.dice');

    //Lecture 50 code

    diceDOM.style.display = 'block'; //unihde the dice
    diceDOM.src = 'images/dice-'+dice+'.png'; //set dice image using src property

    var currentScore = document.getElementById('current-'+activePlayer);

    if (dice !== 1)
    {
        roundScore += dice;
        currentScore.textContent = roundScore;      
    }
    else
    {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        currentScore.textContent = roundScore;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // document.querySelector('.player-0-panel').classList.remove('active');

        // if (activePlayer === 0)
        // {
        //     document.querySelector('.player-0-panel').classList.remove('active');
        //     document.querySelector('.player-1-panel').classList.add('active');
        //     activePlayer = 1;
        // }
        // else
        // {
        //     document.querySelector('.player-1-panel').classList.remove('active');
        //     document.querySelector('.player-0-panel').classList.add('active');
        //     activePlayer = 0;
        // }
    }

});

/* //if user clicks hold:
    
    -scores[activePlayer] += roundScore
    -Reset roundScore
    -Change to the next player
*/

document.querySelector('.btn-hold').addEventListener('click',
function()
{
    var currentScore = document.getElementById('current-'+activePlayer);
    var totalScore = document.getElementById('score-'+activePlayer);

    scores[activePlayer] += roundScore;
    currentScore.textContent = 0;
    roundScore = 0;
    totalScore.textContent = scores[activePlayer];

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // if (activePlayer === 0)
    //     {
    //         document.querySelector('.player-0-panel').classList.remove('active');
    //         document.querySelector('.player-1-panel').classList.add('active');
    //         activePlayer = 1;
    //     }
    //     else
    //     {
    //         document.querySelector('.player-1-panel').classList.remove('active');
    //         document.querySelector('.player-0-panel').classList.add('active');
    //         activePlayer = 0;
    //     }

});
