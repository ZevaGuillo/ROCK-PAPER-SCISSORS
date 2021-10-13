const playerOption = document.getElementById('player');
const computerOption = document.getElementById('option-computer');
const restart = document.getElementById('restart');
const result = document.getElementById('result');
const roundsGame = document.getElementById('roundsGame');

restart.addEventListener('click',restartGame);

playerOption.addEventListener('click', getPlayerOption);

let rounds = 1;

function getPlayerOption(e) {
    if(e.target.classList.contains('option')){
        let optionPlayer = e.target.id;
        let optionComputer = getComputerOption();   
        drawComputer(optionComputer);
        rules(optionComputer,optionPlayer);
        round();
    }
}

function getComputerOption(){
    let option = Math.floor(Math.random() * 3 + 1);
    switch(option){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3: 
            return 'scissors';
    }
}

function drawComputer(option){
    let children = computerOption.children;
    computerOption.removeChild(children[0]);

    let i = document.createElement('i');
    i.classList.add('fas');
    switch (option){
        case 'rock':
            i.classList.add('fa-hand-rock');
            break;
        case 'paper':
            i.classList.add('fa-hand-paper');
            break;
        case 'scissors':
            i.classList.add('fa-hand-scissors');
            break;
    }

    computerOption.appendChild(i);
}

function restartGame(){
    let children = computerOption.children;
    computerOption.removeChild(children[0]);

    let i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-question-circle');
    computerOption.appendChild(i);

    result.textContent = 'Result';
    rounds = 0
}



function rules(computer, player){
    if(computer === player){
        result.textContent = 'The game is a Tie';

    }else if(computer === 'rock' && player === 'scissors' ||
            computer === 'scissors' && player === 'paper' ||
            computer === 'paper' && player === 'rock' ){
        
        result.textContent = 'You lost!!';
        
    }else{
        result.textContent = 'You Win the game!!';
    }
}

function round(){
    if(rounds > 5){
        rounds = 0;
    }

    roundsGame.textContent = 'Round: ' + rounds;

    rounds += 1;

}
