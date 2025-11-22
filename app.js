let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomInx = Math.floor(Math.random() * 3);
    return options[randomInx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinnwer = (userWin, userchoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You Lost. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    console.log("User choice : ",userchoice);
    //generate computer choice -> modular 
    const compChoice = genCompChoice();
    console.log("Computer Choice : ",compChoice);

    if(userchoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userchoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinnwer(userWin, userchoice, compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id"); 
        // console.log("Choice was clicked", userchoice);
        playGame(userchoice);
    });
});