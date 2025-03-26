let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg'); 
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');
 
const genCompChoice = () => {

    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

let drawGame = () => {
    msg.innerText = "Game was draw ! Let's play again.";
    msg.style.backgroundColor = "rgb(68, 143, 143)";
};

const showWinner = (userWin, userChoice, compChoice) => { 
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "User Wins ! Your " + userChoice + " beats " + compChoice;
        msg.style.backgroundColor = "rgb(85, 167, 167)";
    
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "Computer Wins ! " + compChoice + " beats Your " + userChoice;
        msg.style.backgroundColor = "rgb(33, 100, 100)";
    }
};
    

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
            }else {
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id"); 
         playGame(userChoice);
         
    }) 
})
