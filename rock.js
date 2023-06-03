const score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
}

document.body.addEventListener('keydown', (event) => {
    // console.log(event.key);
    if (event.key === 'r' || event.key === 'R'){
        Play('Rock')
    } else if(event.key === 'p' || event.key === 'P'){
        Play('Paper')
    } else if(event.key === 's' || event.key === 'S'){
        Play('Scissors')
    } 
})

function resetScore(Reset){
    if (Reset === 'reset'){
        score.Wins = 0;
        score.Losses = 0;
        score.Ties = 0;
    }

    document.querySelector('.js-scores').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
    
    document.querySelector('.match-result').innerHTML = 'Score is Reseted.'
    // alert(`Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}
    // Your score is reseted`)

    document.querySelector('.js-moves').innerHTML = ''
    
    console.log(`Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}
    Your score is reseted.`)
}

let isAutoPlaying =  false;
let intervalId;
// setInterval -> returns an Id as 1 and 0. 
function autoPlay(){
    if (!isAutoPlaying){
        intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            Play(playerMove)
        }, 1500) //1500 => 1.5 Milliseconds
        isAutoPlaying = true;
        document.querySelector('.auto-play-btn').innerHTML = 'Stop'
    } else{
        clearInterval(intervalId);  //clearInterval -> clears the interval id to 0
        isAutoPlaying = false;
        document.querySelector('.auto-play-btn').innerHTML = 'Auto Play'
    }
    
}



function Play(playerMove){
    let result = '';
    const computerMove = pickComputerMove();

    if (playerMove === 'Rock'){
        if (computerMove === 'Rock'){
            result = 'Tie';
        } else if (computerMove === 'Paper'){
            result = 'You Lose';
        } else if (computerMove === 'Scissors'){
            result = 'You Win';
        }
    } else if (playerMove === 'Paper'){
        if (computerMove === 'Rock'){
            result = 'You Win';
        } else if (computerMove === 'Paper'){
            result = 'Tie';
        } else if (computerMove === 'Scissors'){
            result = 'You Lose';
        }
    } else if(playerMove === 'Scissors'){
        if (computerMove === 'Rock'){
            result = 'You Lose';
        } else if (computerMove === 'Paper'){
            result = 'You Win';
        } else if (computerMove === 'Scissors'){
            result = 'Tie';
        }
    }

    if (result === 'You Win'){
        score.Wins += 1;
    } else if(result === 'You Lose'){
        score.Losses += 1;
    } else if(result === 'Tie'){
        score.Ties += 1;
    }

    document.querySelector('.match-result').innerHTML = `${result}.`     //It displays the results (Ex: You Win, You Lose, Tie)
    document.querySelector('.js-scores').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
    document.querySelector('.js-moves').innerHTML = (`You: <img src="${playerMove}-emoji.png"> Computer: <img src="${computerMove}-emoji.png">`)

    console.log(`Your Move: ${playerMove}. Computer Move: ${computerMove}
    Result: ${result}`)
    
    // alert(`Your Move: ${playerMove}. Computer Move: ${computerMove}. ${result}
    // Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`)
}



function pickComputerMove(){
    const randomNum = Math.random();
    let computerMove = '';
    if (randomNum >= 0 && randomNum < 1/3){
        computerMove = 'Rock';
    } else if (randomNum >= 1/3 && randomNum < 2/3){
        computerMove = 'Paper';
    } else if (randomNum >= 2/3 && randomNum < 1){
        computerMove = 'Scissors';
    }
    return computerMove;
    console.log(computerMove);
}