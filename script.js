document.getElementById("rockBtn").addEventListener("click", () => {
  playerMove("Rock");
});

document.getElementById("paperBtn").addEventListener("click", () => {
  playerMove("Paper");
});

document.getElementById("scissorsBtn").addEventListener("click", () => {
  playerMove("Scissors");
});

document.getElementById("resetBtn").addEventListener("click", () => {
  localStorage.removeItem("score");
  resetScore();
});


let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = {
    win: 0,
    losses: 0,
    tie: 0,
  };
}
myScore();

function computerMove() {
  let computerMove = Math.random();
  let computerChoice = "";
  if (computerMove >= 0 && computerMove < 1 / 3) {
    computerChoice = "Rock";
  } else if (computerMove >= 0 && computerMove < 2 / 3) {
    computerChoice = "Paper";
  } else if (computerMove >= 0 && computerMove < 3 / 3) {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function playerMove(playGame) {
  const computerChoice = computerMove();
  let result = "";
  if (playGame === "Rock") {
    if (computerChoice === "Rock") {
      result = "Tie";
    } else if (computerChoice === "Paper") {
      result = "Win";
    } else if (computerChoice === "Scissors") {
      result = "Lose";
    }
  } else if (playGame === "Paper") {
    if (computerChoice === "Rock") {
      result = "Lose";
    } else if (computerChoice === "Paper") {
      result = "Tie";
    } else if (computerChoice === "Scissors") {
      result = "Win";
    }
  } else if (playGame === "Scissors") {
    if (computerChoice === "Rock") {
      result = "Lose";
    } else if (computerChoice === "Paper") {
      result = "Win";
    } else if (computerChoice === "Scissors") {
      result = "Tie";
    }
  }
  document.querySelector(".myResult").innerHTML = `You picked ${playGame}.`;
  document.querySelector(
    ".computerResult"
  ).innerHTML = ` Computer picked ${computerChoice}.`;

  if (result === "Win") {
    score.win += 1;
  } else if (result === "Lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  myScore();

//   alert(
//     `You picked ${playGame}. Computer picked ${computerChoice}. Its a ${result} 
// Win: ${score.win}, Losses: ${score.losses}, Tie: ${score.tie}`
//   );
}

function resetScore() {
  score.win = 0;
  score.losses = 0;
  score.tie = 0;
  // alert(`Score was reset`);
}

function myScore() {
  document.querySelector(
    ".myScore"
  ).innerHTML = `Win: ${score.win}, Losses: ${score.losses}, Tie: ${score.tie}`;
}
