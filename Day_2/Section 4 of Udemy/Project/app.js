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
var scores, roundScore, activePlayer, dice;

scores = [0,0]; //global (total) scores
roundScore = 0; //current score
activePlayer = 0; //0 = First Player, 1 = Second Player

//Generate random dice number
dice = Math.floor(Math.random() * 6)+1; //1 to 6

//querySelector: Selects the first instance of the stated element
//textContent: The text content of a nodes AND descendants - MDN
//innerHTML: used to set the HTML of an element, unlike textContent
document.querySelector('#current-'+activePlayer).textContent = dice;

var currentScore = document.querySelector('#current-'+activePlayer);
var totalScore = document.querySelector('#score-'+activePlayer);

//Changing the style: element.style.CSSPropertyHere = 'CSSValueHere'
document.querySelector('.dice').style.display = 'none';

