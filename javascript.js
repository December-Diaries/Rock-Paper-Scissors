console.log("Hello world");



function getComputerChoice(){
    let comp_choice;
    let gen = Math.random();
    console.log(gen);
    
    if (gen<(1/3)){
        comp_choice="rock";
    }
    else if(gen>(2/3)){
        comp_choice='paper';
    }
    else{
        comp_choice="scissor";
    }
    return comp_choice;
   
}

function getHumanChoice(){
    let human_choice=prompt("Choose your move: Rock, Paper or Scissor?").toLowerCase();
    return human_choice;

}






function playGame(){
    let human_score=0, comp_score =0;

    function playRound(human_choice,comp_choice){
        console.log(`You choose ${human_choice}! Computer chooses ${comp_choice}!\n`)
        let victory=0;
        if(human_choice=="rock"){
            switch (comp_choice){
                case "rock":
                    break;
                case "scissor":
                    human_score+=1;
                    victory=1;
                    break;
                case "paper":
                    comp_score+=1;
                    victory=-1;
                    break;    
            }
        }
        if(human_choice=="scissor"){
            switch (comp_choice){
                case "rock":
                    comp_score+=1;
                    victory=-1;
                    break;
                case "scissor":
                    break;
                    
                case "paper":
                    human_score+=1;
                    victory=1;
                    break;
                    
            }
        }

        if(human_choice=="paper"){
            switch (comp_choice){
                case "rock":
                    human_score+=1
                    victory=1;
                    break;
                case "scissor":
                    comp_score+=1;
                    victory=-1;
                    break;
                case "paper":
                    break;
            }
        }
        switch(victory){
            case 1:
                console.log("You have won!");
                break;
            case -1:
                console.log("You lost.");
                break;
            default:
                console.log("It is a draw.");
                break;    
        }
        

        console.log(`human score is ${human_score}\ncomputer score is ${comp_score}`);

        
    }
    for(let i=0;i<5;i++){
        const humanSelection= getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (human_score>comp_score){
        console.log(`\nYou win the game.`);
    }
    else if (comp_score>human_score){
        console.log(`\nYou lose.`)
    }
    else{
        console.log('\nIts a draw.')
    }
    
    
}

playGame();