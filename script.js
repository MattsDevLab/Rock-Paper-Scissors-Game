    let humanScore = 0;
    let computerScore = 0;

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function getComputerChoice(){
        let choice =  Math.floor((Math.random() * 3));

        if(choice === 0){
            return "rock";
        } else if(choice === 1){
            return "scissors";
        } else{
            return "paper";
        }
    }

    function getHumanChoice(){
        return prompt().toLowerCase();
    }

    function playRound(humanChoice, computerChoice){
        if(humanChoice === "rock" && computerChoice == "scissors"){
            console.log( "You win! Rock beats Scissors");
            return humanScore = + 1;
        } else if(humanChoice === "scissors" && computerChoice == "rock"){
            console.log( "You loose! Rock beats Scissors");
            return computerScore = + 1;
        } else if(humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win! Scissors beats paper");
            return humanScore = + 1;
        } else if(humanChoice === "paper" && computerChoice === "scissors"){
            console.log("You loose! Scissors beats paper");
            return computerScore = + 1;
        } else if(humanChoice === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats rock!paper");
             return humanScore = + 1;
        } else if(humanChoice === "rock" && computerChoice === "paper"){
            console.log("You loose! Paper beats rock!paper");
            return computerScore = + 1;
        } else if(humanChoice === computerChoice){
            console.log("Its a draw");
        }
   }

   playRound(humanSelection, computerSelection);

    console.log(`Human: ${humanSelection}`);
    console.log(`Computer choice: ${computerSelection}`);
    console.log(`Human score ${humanScore}`);
    console.log(`Computer score ${computerScore}`);



