var scores,activePlayer,roundScore,gamePlaying;
gamePlaying=true;
init();
document.querySelector('.btn-roll').addEventListener('click',function()
{  if (gamePlaying) {
  var dice=Math.floor(Math.random()*6)+1;
  var diceDOM=document.querySelector(".dice");
  diceDOM.style.display="block";
  diceDOM.src="dice-"+dice+".png";

  if(dice!==5)
  {
    roundScore += dice;
    console.log(roundScore);
    document.querySelector("#current-"+activePlayer).textContent=roundScore;
  }
  else
   {
  NextPlayer();
  }
}
}
);
document.querySelector(".btn-hold").addEventListener("click",function(){
  if(gamePlaying)
  //add current score to global scores
  scores[activePlayer]+=roundScore;
  document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
  if (scores[activePlayer]>=20) {
 document.querySelector("#name-"+activePlayer).textContent="Winner!";
   document.querySelector(".dice").style.display="none";
   document.querySelector('.player-'+activePlayer+"-panel").classList.add("winner");
   document.querySelector('.player-'+activePlayer+"-panel").classList.remove("active");
   gamePlaying=false;
  }
  else {
    NextPlayer();

  }
  //update the ui
  //and check if the player won  the Game
}
);
function NextPlayer()
{
  activePlayer==0?activePlayer=1:activePlayer=0;
  roundScore=0;
  document.getElementById("current-0").textContent="0"
  document.getElementById("current-1").textContent="0"
  //document.querySelector(".player-0-panel").classList.remove('active');
  //document.querySelector(".player-1-panel").classList.add('active');
  document.querySelector(".player-0-panel").classList.toggle('active');
  document.querySelector(".player-1-panel").classList.toggle('active');
  document.querySelector(".dice").style.display="none";
}
document.querySelector(".btn-new").addEventListener('click',init);
function init()
{
  scores=[0,0];
  roundScore=0;
  activePlayer= 0;
  gamePlaying=true;
  document.getElementById("score-0").textContent='0';
  document.getElementById("score-1").textContent='0';
  document.getElementById("current-0").textContent='0';
  document.getElementById("current-1").textContent='0';
   document.getElementById("name-0").textContent="Player 1";
   document.getElementById("name-1").textContent="Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}
