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

    function playGame(){
        let humanScore = 0;
        let computerScore = 0;
        const selectionOptions = document.querySelectorAll("button");
        const scoreboardHuman = document.querySelector("#human-score");
        const scoreboardComp = document.querySelector("#comp-score");

        function updateScoreboard(){
            if (scoreboardHuman) scoreboardHuman.textContent = humanScore;
            if (scoreboardComp) scoreboardComp.textContent = computerScore;

            if(humanScore >= 5){
                alert("Human you are the winner!!!") ;
            } else if(computerScore >= 5){
                alert("Computer is the winner!!!!");
            }
        }

        function playRound(humanChoice, computerChoice){
            if(humanChoice === "rock" && computerChoice == "scissors"){
                console.log( "You win! Rock beats Scissors");
                humanScore++;
            } else if(humanChoice === "scissors" && computerChoice === "rock"){
                console.log( "You loose! Rock beats Scissors");
                computerScore++;
            } else if(humanChoice === "scissors" && computerChoice === "paper"){
                console.log("You win! Scissors beats paper");
                humanScore++;
            } else if(humanChoice === "paper" && computerChoice === "scissors"){
                console.log("You loose! Scissors beats paper");
                computerScore++;
            } else if(humanChoice === "paper" && computerChoice === "rock"){
                console.log("You win! Paper beats rock!paper");
                humanScore++;
            } else if(humanChoice === "rock" && computerChoice === "paper"){
                console.log("You loose! Paper beats rock!paper");
                computerScore++;
            } else if(humanChoice === computerChoice){
                console.log("Its a draw");
            }

            updateScoreboard();
        }

        selectionOptions.forEach((button) =>{
            button.addEventListener('click', () => {
                const playerSelection = button.value;
                console.log(playerSelection);
                playRound(playerSelection, getComputerChoice());
            });
        });
    }

    playGame();