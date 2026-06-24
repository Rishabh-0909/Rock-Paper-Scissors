
let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    const randomnumber=Math.floor(Math.random()*3);
    if(randomnumber==0){
        return "rock";
    }
    else if(randomnumber==1){
        return "paper";
    }
    else{
        return "scissor";
    }
}



function getHumanChoice(){
    let choice=prompt("What do you chose");
    return choice;
}


function playRound(humanChoice1,computerChoice){
    let humanChoice=humanChoice1.toLowerCase();
    if(humanChoice=="rock" && computerChoice=="scissor"){
        humanScore++;
        return console.log("You win! Rock beats Scissor");
        
    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        humanScore++;
        return console.log("You win! Paper beats Rock");
    }
    else if(humanChoice=="scissor" && computerChoice=="paper"){
        humanScore++;
        return console.log("You win! Scissor beats Paper");
    }
    else if(humanChoice=="rock" && computerChoice=="paper"){
        computerScore++;
        return console.log("You lose! paper beats rock");
    }
    else if(humanChoice=="paper" && computerChoice=="scissor"){
        computerScore++;
        return console.log("You lose! Scissor beats Paper");
    }
    else if(humanChoice=="scissor" && computerChoice=="rock"){
        computerScore++;
        return console.log("You lose! Rock beats Scissor");
    }
    else{
        return console.log("Both choices are equal");
    }
    
}


function playGame(){
    for(let i=0;i<5;i++){
    const humanSelection=getHumanChoice();
    const computerSelection=getComputerChoice();

playRound(humanSelection,computerSelection);
    }
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if(computerScore>humanScore){
        console.log("You lost this game! Better luck next time");
    }
    else if(humanScore>computerScore){
        console.log("You won this game, Congratulations!");
    }
    else{
        console.log("This game is a tie");
    }


}
playGame();