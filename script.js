   console.log('Hellow Hellow Welcome, this is now live'); 

   const rock = 0;
   const paper = 1;
   const scissors = 2;

   function getComputerChoice(){
    return Math.floor((Math.random() * 3));
   }

   function getHumanChoice(){
    return prompt();
   }

   console.log(getHumanChoice());