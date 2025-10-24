    let humanScore = 0;
    let computerScore = 0;

//    const humanSelection = getHumanChoice();
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

//    function playRound(humanSelection, computerSelection){

//    }

    console.log(getComputerChoice());
    console.log(getHumanRockChoice());



