let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const sms = document.querySelector("#msg");

const genComChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "game got draw, play again"
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You win!")
        msg.innerText = "You win!"
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You lose!");
        msg.innerText = "You lose!"
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log(`Choice was clicked ${userChoice}`);
    // Generate computer choice
    const comChoice = genComChoice();
    console.log(`Computer Choice ${comChoice}`);

if(userChoice===comChoice){
    // Draw Game
    drawGame();
}
else{
    let userWin = true;
    if(userChoice==="rock") {
        // Scissor , Paper
        userWin = comChoice === "paper" ? false : true;
    }
    else if(userChoice==="paper"){
        // rock,scissor
        userWin = comChoice === "scissor" ? false : true;
    }
    else{
        // rock , paper
        comChoice === "rock" ? false : true;
    }
    showWinner(userWin);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame (userChoice);      
    });
});