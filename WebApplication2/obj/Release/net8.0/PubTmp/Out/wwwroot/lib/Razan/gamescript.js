const gameContainer = document.querySelector(".game_box");
const resultField = document.querySelector('.result');
const userResult = document.querySelector('.user_result');
const cpuResult = document.querySelector('.cpu_result');
const optionImages = document.querySelectorAll('.option_image');

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You Win!';
    } else {
        return 'You Lose!';
    }
}

function handleOptionClick(event) {
    const userChoice = event.target.nextElementSibling.textContent.toLowerCase();
    const computerChoice = getComputerChoice();

    userResult.innerHTML = `<i class="fa-regular fa-hand-${userChoice} fa-rotate-90 fa-2xl" style="color: #ff1c2f;"></i>`;
    cpuResult.innerHTML = `<i class="fa-regular fa-hand-${computerChoice} fa-rotate-270 fa-2xl" style="color: #ff1c2f;"></i>`;

    userResult.innerHTML = userChoice === 'scissors'
        ? `<i class="fa-regular fa-hand-scissors fa-rotate-180 fa-2xl" style="color: #ff1c2f;"></i>`
        : `<i class="fa-regular fa-hand-${userChoice} fa-rotate-90 fa-2xl" style="color: #ff1c2f;"></i>`;

    cpuResult.innerHTML = computerChoice === 'scissors'
        ? `<i class="fa-regular fa-hand-scissors fa-rotate-360 fa-2xl" style="color: #ff1c2f;"></i>`
        : `<i class="fa-regular fa-hand-${computerChoice} fa-rotate-270 fa-2xl" style="color: #ff1c2f;"></i>`;


    const winner = determineWinner(userChoice, computerChoice);
    resultField.textContent = winner;
}

optionImages.forEach(optionImage => optionImage.addEventListener('click', handleOptionClick));
