let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomInx = Math.floor(Math.random() * 3);
    return options[randomInx];
}

const drawGame = () => {
    console.log("Game was draw");
}

const showWinnwer = (userWin) => {
    if(userWin) {
        console.log("You win!");
    } else {
        console.log("You lose");
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
        showWinnwer(userWin);
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