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
var compIcon = document.querySelector("#comp-move");

// A function that handles a game of rps
play_rps = (move) => {
  comp_move = random_number_generator();

  comp_icon(comp_move);

  if (move === comp_move) {
    outcome_display.textContent = `It's a tie. Both played ${moves[move]}`;
    ties++;
  } else if ((move === 0 && comp_move === 1) || (move === 1 && comp_move === 2) || (move === 2 && comp_move === 2)) {
    outcome_display.textContent = `You lost. Computer: ${moves[comp_move]}, User: ${moves[move]}`;
    comp_score++;
  } else {
    outcome_display.textContent = `You won. Computer: ${moves[comp_move]}, User: ${moves[move]}`;
    user_score++; 
  }

  num_games++;
  update_stats();
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

// A function that updates the game's stats
update_stats = () => {
  winrate = ((user_score/num_games) * 100).toFixed(2);

  div_games.textContent = num_games;
  div_wins.textContent = user_score;
  div_loses.textContent = comp_score;
  div_ties.textContent = ties;
  div_winrate.textContent = winrate;

  // A function that tells you how well you're doing in terms of winrate
  if (winrate >= 80) {
    div_winrate.setAttribute("style", "background-color:#2a9d8f");
  } else if (winrate < 80 && winrate >= 60) {
    div_winrate.setAttribute("style", "background-color:#f4a261");
  } else {
    div_winrate.setAttribute("style", "background-color:#e76f51");
  }
};

// A function that shows the computer's icon move
comp_icon = (num) => {
  switch(num) {
    case 0:
      compIcon.setAttribute("class", "far fa-hand-rock");
      break;
    case 1:
      compIcon.setAttribute("class", "far fa-hand-paper");
      break;
    case 2:
      compIcon.setAttribute("class", "far fa-hand-scissors");
  }
}