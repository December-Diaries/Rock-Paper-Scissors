console.log("Hello world");

let human_score, comp_score =0;

function getComputerChoice(){
    let comp_choice;
    let gen = Math.random();
    console.log(gen);
    
    if (gen<(1/3)){
        comp_choice="r";
    }
    else if(gen>(2/3)){
        comp_choice='p';
    }
    else{
        comp_choice="s";
    }
    console.log(comp_choice);
}

function getHumanChoice(){

    let human_choice=prompt("Choose your move: Rock, Paper or Scissor?").toLowerCase();
    console.log(human_choice);
    
    

}

getHumanChoice();
// function playRound(human_choice,comp_choice){

// }