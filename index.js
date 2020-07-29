// Declare variables
var moves = ["rock", "paper", "scissors"];
var comp_move;
var user_move;
var comp_score = 0;
var user_score = 0;
var ties = 0;
var num_games = 0;
var is_playing = true;
var div_games = document.querySelector(".num-games");
var div_wins = document.querySelector(".no-wins");
var div_loses = document.querySelector(".no-loses");
var div_ties = document.querySelector(".no-ties");
var div_winrate = document.querySelector(".div-winrate");

// a while loop that keeps asking the user if they still wants to play a game
while(is_playing){
  
  // keeps track of the number of games played
  num_games++;

  // makes sure that the user inputs the correct value
  do {
    comp_move = Math.floor(Math.random() * 3);
    user_move = parseInt(prompt("What's your move: (0 = rock, 1 = paper, and 2 = scissors")); 
  } 
  while (user_move != 0 && user_move != 1 && user_move != 2)

  // a round of rps; determines the winner
  if (comp_move === user_move) {
    alert(`It's a tie. Computer: ${moves[comp_move]}, User: ${moves[user_move]}`);
    ties++;
  } else if ((comp_move === 0 && user_move === 1) || (comp_move === 1 && user_move === 2) || (comp_move === 2 && user_move === 0)) {
    alert(`You won. Computer: ${moves[comp_move]}, User: ${moves[user_move]}`);
    user_score++;
  } else {
    alert(`You lose. Computer: ${moves[comp_move]}, User: ${moves[user_move]}`);
    comp_score++;
  }

  // asks the user if they want to keep playing
  is_playing = confirm("Do you still want to play?");  
}

// Statistics of the game
var winrate = ((user_score/num_games) * 100).toFixed(2);

div_games.innerHTML = num_games;
div_wins.innerHTML = user_score;
div_loses.innerHTML = comp_score;
div_ties.innerHTML = ties;
div_winrate.innerHTML = winrate;
