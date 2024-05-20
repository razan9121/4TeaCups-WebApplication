// Get the buttons and result element
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

// Add event listeners to the buttons
rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

// Function to play a round of Rock, Paper, Scissors
function playRound(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determine the winner
    let result;
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    // Display the result
    resultDiv.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}
