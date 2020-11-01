var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var roundResult = document.getElementById('roundResult');
var playerPoints = 0;
var computerPoints = 0;
var finalResult = document.getElementById('finalResult');
var computer = document.getElementById('computer');
var player =  document.getElementById('player');
var divPlays = document.getElementById('plays');

// Play selection event listener
rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

// Function playRound
function playRound(e) {
    var playerSelect = e.target.id;
    var computerSelect = computerPlay();
    if (playerSelect === computerSelect) {
        return roundResult.textContent = 'Tied round';
    } else if (playerSelect === 'rock') {
        if (computerSelect === 'paper') {
            computerPoints++;
            computer.textContent = computerPoints;
            updateFinalResult();
            return roundResult.textContent = 'You lose this round! Paper beats Rock';                    
        } else {
            playerPoints++;
            player.textContent = playerPoints;
            updateFinalResult();
            return roundResult.textContent = 'You win this round! Rock beats Scissors';
        }
    } else if (playerSelect === 'paper') {
        if (computerSelect === 'rock') {
            playerPoints++;
            player.textContent = playerPoints;
            updateFinalResult();
            return roundResult.textContent = 'You win this round! Paper beats Rock';                    
        } else {
            computerPoints++;
            computer.textContent = computerPoints;
            updateFinalResult();
            return roundResult.textContent = 'You lose this round! Scissors beat Paper';
        }
    } else {
        if (computerSelect === 'rock') {
            computerPoints++;
            computer.textContent = computerPoints;
            updateFinalResult();
            return roundResult.textContent = 'You lose this round! Rock beats Scissors';                    
        } else {
            playerPoints++;
            player.textContent = playerPoints;
            updateFinalResult();
            return roundResult.textContent = 'You win this round! Scissors beat Paper';
        }
    }
}

// Function computerPlay
function computerPlay() {
    var availablePlays = ['rock', 'paper', 'scissors'];
    return availablePlays[Math.floor(Math.random() * availablePlays.length)];
}

// Update game result
computer.textContent = computerPoints;
player.textContent = playerPoints;

function updateFinalResult() {
    if (playerPoints === 5) {
        finalResult.textContent = 'You win the game. Congratulations!';
        plays.style.display = 'none';
    } else if (computerPoints === 5) {
        finalResult.textContent = 'You lose the game. Next time!';
        plays.style.display = 'none';
    }
}
