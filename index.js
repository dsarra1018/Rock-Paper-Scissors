// Declare variables
var moves = ["rock", "paper", "scissors"];
var comp_move;
var user_move;
var comp_score = 0;
var user_score = 0;
var ties = 0;
var num_games = 0;
var winrate = 0;
var div_games = document.querySelector(".num-games");
var div_wins = document.querySelector(".no-wins");
var div_loses = document.querySelector(".no-loses");
var div_ties = document.querySelector(".no-ties");
var div_winrate = document.querySelector(".div-winrate");
var outcome_display = document.querySelector("h2");
var rockBtn = document.querySelector("#rock-btn");
var paperBtn = document.querySelector("#paper-btn");
var scissorsBtn = document.querySelector("#scissors-btn");

// A function that handles a game of rps
play_rps = (move) => {
  comp_move = random_number_generator();

  if (move === comp_move) {
    outcome_display.textContent = `It's a tie. Both played ${moves[move]}`;
  } else if ((move === 0 && comp_move === 1) || (move === 1 && comp_move === 2) || (move === 2 && comp_move === 2)) {
    outcome_display.textContent = `You lost. Computer: ${moves[comp_move]}, User: ${moves[move]}`;
  } else {
    outcome_display.textContent = `You won. Computer: ${moves[comp_move]}, User: ${moves[move]}`;
  }
}

// Event listeners for the buttons
rockBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user_move = parseInt(rockBtn.value);
  play_rps(user_move);
});

paperBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user_move = parseInt(paperBtn.value);
  play_rps(user_move);
});

scissorsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user_move = parseInt(scissorsBtn.value);
  play_rps(user_move);
});

// A function that handles computer move using the function random
random_number_generator = () => {
  return Math.floor(Math.random() * 3);
};