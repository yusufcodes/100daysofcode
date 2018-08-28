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
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-'+dice+'.png';

});

