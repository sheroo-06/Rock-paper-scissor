let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#result-msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
    console.log("Game was Draw");
  msg.innerHTML = "Game was Draw. Play again.";
  
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
    // msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
    msg.innerHTML = `You lost. ${compChoice} beats your ${userChoice}`;
    // msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // Rock beats scissors, loses to paper
      userWin = compChoice === "scissor" ? true : false;
    } 
    else if (userChoice === "paper") {
      // Paper beats rock, loses to scissors
      userWin = compChoice === "rock" ? true : false;
    } 
    else if (userChoice === "scissor") {
      // Scissors beats paper, loses to rock
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(`User choice: ${userChoice}`);

    playGame(userChoice);
  });
});

