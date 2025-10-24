    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();

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

    function playGame(){
        let humanScore = 0;
        let computerScore = 0;

        function playRound(humanChoice, computerChoice){
            if(humanChoice === "rock" && computerChoice == "scissors"){
                console.log( "You win! Rock beats Scissors");
                return humanScore++;
            } else if(humanChoice === "scissors" && computerChoice == "rock"){
                console.log( "You loose! Rock beats Scissors");
                return computerScore++;
            } else if(humanChoice === "scissors" && computerChoice === "paper"){
                console.log("You win! Scissors beats paper");
                return humanScore++;
            } else if(humanChoice === "paper" && computerChoice === "scissors"){
                console.log("You loose! Scissors beats paper");
                return computerScore++;
            } else if(humanChoice === "paper" && computerChoice === "rock"){
                console.log("You win! Paper beats rock!paper");
                return humanScore++;
            } else if(humanChoice === "rock" && computerChoice === "paper"){
                console.log("You loose! Paper beats rock!paper");
                return computerScore++;
            } else if(humanChoice === computerChoice){
                console.log("Its a draw");
            }
        }

        let result1 = playRound(getHumanChoice(), getComputerChoice());
        let result2 = playRound(getHumanChoice(), getComputerChoice());
        let result3 = playRound(getHumanChoice(), getComputerChoice());
        let result4 = playRound(getHumanChoice(), getComputerChoice());
        let result5 = playRound(getHumanChoice(), getComputerChoice());

        console.log(`Human score total: ${humanScore}`);
        console.log(`Computer score total: ${computerScore}`);
    }

    playGame();