//form
function validateForm() {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var subjectInput = document.getElementById('subject');
  var messageInput = document.getElementById('message');
  var captchaInput = document.getElementById('captcha-input');
  var errorElement = document.getElementById('error-message');

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var subject = subjectInput.value.trim();
  var message = messageInput.value.trim();
  var captcha = captchaInput.value.trim();

  if (name === '') {
    displayError(nameInput, 'Please enter your name.');
    return false;
  }

  if (email === '') {
    displayError(emailInput, 'Please enter your email address.');
    return false;
  }

  if (subject === '') {
    displayError(subjectInput, 'Please enter a subject.');
    return false;
  }

  if (message === '') {
    displayError(messageInput, 'Please enter a message.');
    return false;
  }

  if (captcha === '') {
    displayError(captchaInput, 'Please enter the captcha answer.');
    return false;
  }

  var correctAnswer = document.getElementById("captcha-answer").value;
  if (captcha !== correctAnswer) {
    displayError(captchaInput, 'Incorrect captcha answer.');
    return false;
  }

  errorElement.style.display = 'none';
  return true;
}

function displayError(inputElement, errorMessage) {
  var errorElement = document.getElementById('error-message');
  inputElement.classList.add('error');
  errorElement.textContent = errorMessage;
  errorElement.style.display = 'block';
}

window.addEventListener('DOMContentLoaded', function() {
  generateCaptcha();
});

function generateCaptcha() {
  var num1 = Math.floor(Math.random() * 10);
  var num2 = Math.floor(Math.random() * 10);
  var answer = num1 + num2;

  var captchaContainer = document.getElementById("captcha-container");
  captchaContainer.textContent = num1 + " + " + num2 + " = ";

  var captchaInput = document.createElement("input");
  captchaInput.type = "number";
  captchaInput.id = "captcha-input";
  captchaInput.name = "captcha";
  captchaContainer.appendChild(captchaInput);

  var captchaAnswer = document.createElement("input");
  captchaAnswer.type = "hidden";
  captchaAnswer.id = "captcha-answer";
  captchaAnswer.name = "captcha_answer";
  captchaAnswer.value = answer;
  captchaContainer.appendChild(captchaAnswer);
  
  var errorMessage = document.createElement("span");
  errorMessage.id = "error-message";
  captchaContainer.appendChild(errorMessage);
}

// Quiz 
var questions = [];
var currentQuestion = 0;
var score = 0;

function generateQuestion() {
  var num1 = Math.ceil(Math.random() * 10);
  var num2 = Math.ceil(Math.random() * 10);
  var operator = Math.random() < 0.5 ? '+' : '-';
  var correctAnswer;

  if (operator === '+') {
    correctAnswer = num1 + num2;
  } else {
    correctAnswer = num1 - num2;
  }

  var question = num1 + ' ' + operator + ' ' + num2;
  questions.push({ question: question, answer: correctAnswer.toString() });
}

function startQuiz() {
  for (var i = 0; i < 10; i++) {
    generateQuestion();
  }
  showQuestion();
}

function showQuestion() {
  var questionElement = document.getElementById('question');
  questionElement.textContent = questions[currentQuestion].question;
}

function checkAnswer(event) {
  event.preventDefault();
  var answerElement = document.getElementById('answer');
  var userAnswer = answerElement.value.trim();
  var correctAnswer = questions[currentQuestion].answer;
  if (userAnswer === correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    var scoreElement = document.getElementById('score');
    scoreElement.textContent = 'Your score: ' + score + '/' + questions.length;
  }
  answerElement.value = '';
}
// Game 
function playGame(userChoice) {
  var choices = ['rock', 'paper', 'scissors'];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  var result = document.getElementById('result');
  if (userChoice === computerChoice) {
    result.textContent = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result.textContent = "You win!";
  } else {
    result.textContent = "You lose!";
  }
}
// index
function greetUser() {
  var greeting = document.getElementById('greeting');
  var hour = new Date().getHours();
  if (hour < 12) {
    greeting.textContent = "Good morning!";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon!";
  } else {
    greeting.textContent = "Good evening!";
  }
}