/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
//This lecture includes
1. How to create fundamental variables
2. How to generate a random number
3. How to manipulate DOM and how to read from the DOM
4. How to change CSS styles.

*/



var scores, roundScore, activePlayer, gamePlaying;
init();
//Math . floor to round off decimal 



/*
 document.querySelector('#current-' + activePlayer).textContent= dice;//text manipulation
//document.querySelector('#current-' + activePlayer).innerHTML='<em>' + dice + '</em>'
//for manipulating HTML elements

var x= document.querySelector('#score-0').textContent;

console.log(x);
//for storing in a variable


*/

document.querySelector('.btn-roll').addEventListener('click', function(){
if(gamePlaying){
    //1.Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //2.Display the results
    var diceDOM= document.querySelector('.dice'); //So that we dont have to call the query again and again
    
    diceDOM.style.display= 'block';
    diceDOM.src='dice-' + dice + '.png';
    
    
    
    //3. Update the round number if the rolled number is not 1
    
    
    if(dice !== 1){
        //Add Score
        roundScore += dice;//roundScore= roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent= roundScore;//text manipulation
    }else{
        /*
        //Next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;//this is same as writing if(activePlayer===0){activePlayer=1;}else{activePlayer=0;}
        roundScore=0;
        
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        
        document.querySelector('.dice').style.display= 'none';
        */
        nextPlayer();
        
    }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    
    
    //Add Current Score to global score
  scores[activePlayer] += roundScore;
    
    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    
    
    
    //Check if Player Won the game
    
    if (scores[activePlayer] >= 100){
         document.querySelector('#name-' + activePlayer).textContent = 'You Win';
        document.querySelector('.dice').style.display= 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying =false;
    }else{
        //Next Player
    nextPlayer();
    
    }
    
    
    
    
 }   
    
    
});

function nextPlayer(){
    //Next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;//this is same as writing if(activePlayer===0){activePlayer=1;}else{activePlayer=0;}
        roundScore=0;
        
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        
        document.querySelector('.dice').style.display= 'none';
        
    
};
document.querySelector('.btn-new').addEventListener('click', init);
/*
document.querySelector('.btn-new').addEventListener('click', function(){
init();

}); */
function init(){
    scores = [0,0];
roundScore = 0;
activePlayer = 0;
    gamePlaying = true;//State Variable
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent = 'Player-1';
document.getElementById('name-1').textContent = 'Player-2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
    
document.querySelector('.dice').style.display='none';


};


