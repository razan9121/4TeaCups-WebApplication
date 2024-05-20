
function getGreeting() {
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  var greeting;

  if (currentHour < 12) {
    greeting = "Good morning!";
  } else if (currentHour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  return greeting;
}

window.onload = function() {
  var greetingElement = document.getElementById("greeting");
  greetingElement.textContent = getGreeting();
};
// contact-------------------
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var captcha = document.getElementById('captcha').value;

    var errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML = ''; // Clear previous error messages

    // Field validation
    var missingFields = [];
    if (name === '') {
      missingFields.push('Name');
    }
    if (email === '') {
      missingFields.push('Email');
    }
    if (subject === '') {
      missingFields.push('Subject');
    }
    if (message === '') {
      missingFields.push('Message');
    }
    if (captcha === '') {
      missingFields.push('Captcha');
    }

    if (missingFields.length > 0) {
      displayError('Please fill in the following fields: ' + missingFields.join(', '));
      return;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      displayError('Please enter a valid email address.');
      return;
    }

    // Captcha validation
    var correctAnswer = 8; // Correct answer to the captcha
    if (parseInt(captcha) !== correctAnswer) {
      displayError('Captcha answer is incorrect.');
      return;
    }

    // If all validations pass, submit the form
    document.getElementById('contactForm').submit();
  }

  function displayError(errorMessage) {
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = errorMessage;

    var errorContainer = document.getElementById('errorContainer');
    errorContainer.appendChild(errorDiv);
  }

  // Game-----------------------------
  const choices = ['rock', 'paper', 'scissors'];
  const resultDiv = document.getElementById('result');

  function getComputerChoice() {
    const compNum = Math.floor(Math.random() * 3);
    return choices[compNum];
  }

  function playRound(playerChoice, computerChoice) {
    let result;
    if (playerChoice === computerChoice) {
      result = 'Tie';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
      result = 'Player';
    } else {
      result = 'Computer';
    }
    return result;
  }

  function updateResult(result) {
    resultDiv.textContent = result;
    document.getElementById('game-board').classList.add('win');
    setTimeout(() => {
      document.getElementById('game-board').classList.remove('win');
    }, 2000);
    if (result === 'Player') {
      resultDiv.classList.add('player-win');
      resultDiv.classList.remove('computer-win', 'tie');
    } else if (result === 'Computer') {
      resultDiv.classList.add('computer-win');
      resultDiv.classList.remove('player-win', 'tie');
    } else {
      resultDiv.classList.add('tie');
      resultDiv.classList.remove('player-win', 'computer-win');
    }
  }

  function resetResult() {
    resultDiv.textContent = '';
    resultDiv.classList.remove('player-win', 'computer-win', 'tie');
  }

  function playGame() {
    const playerChoice = this.id;
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    updateResult(`${result} won!`);
  }

  const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playGame));

// Exam-----------------------------------

const questions = [];

for (let i = 0; i < 10; i++) {
  const num1 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  const num2 = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
  const operator = Math.random() < 0.5 ? '+' : '-'; // Randomly select either '+' or '-'

  let answer;
  let question;

  if (operator === '+') {
    answer = num1 + num2;
    question = `${num1} + ${num2}`;
  } else {
    answer = num1 - num2;
    question = `${num1} - ${num2}`;
  }

  questions.push({ question, answer });
}

const quizContainer = document.getElementById('quiz-container');
let correctAnswers = 0; // Variable to store the number of correct answers

questions.forEach((q, index) => {
  const div = document.createElement('div');
  div.innerHTML = `<p>Question ${index + 1}: ${q.question}</p>
    <input type="number" id="answer${index}">
    <button onclick="checkAnswer(${index})">Submit</button>`;
  quizContainer.appendChild(div);
});

function checkAnswer(index) {
  const userAnswer = Number(document.getElementById(`answer${index}`).value);
  const correctAnswer = questions[index].answer;

  if (userAnswer === correctAnswer) {
    alert('Correct!');
    correctAnswers++; // Increment the correctAnswers variable
  } else {
    alert(`Wrong! The correct answer is ${correctAnswer}.`);
  }

  // Clear the input field after checking the answer
  document.getElementById(`answer${index}`).value = '';

  // Move to the next question or display the score
  if (index < questions.length - 1) {
    document.getElementById(`answer${index + 1}`).focus();
  } else {
    displayScore();
  }
}

function displayScore() {
  const scoreContainer = document.createElement('div');
  scoreContainer.innerHTML = `<p>You scored ${correctAnswers} out of ${questions.length}.</p>`;
  quizContainer.appendChild(scoreContainer);
}
// words changes