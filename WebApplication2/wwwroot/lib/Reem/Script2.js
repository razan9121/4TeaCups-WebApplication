//greating

document.addEventListener("DOMContentLoaded", function() {
  const greetingMessage = document.getElementById("greetingMessage");
  const currentTime = new Date().getHours();

  if (currentTime >= 5 && currentTime < 12) {
    greetingMessage.textContent = "Good morning!";
  } else if (currentTime >= 12 && currentTime < 18) {
    greetingMessage.textContent = "Good afternoon!";
  } else {
    greetingMessage.textContent = "Good evening!";
  }
});

window.onload = function() {
  var greetingElement = document.getElementById("greetingMessage");
  greetingElement.classList.add("fade-in");
};



// Function to generate a random addition question for the captcha
function generateCaptcha() {
    var num1 = Math.floor(Math.random() * 10) + 1; // Generate random numbers between 1 and 10
    var num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("num1").innerText = num1; // Display the numbers in the captcha question
    document.getElementById("num2").innerText = num2;
    document.getElementById("captcha").value = ""; // Clear the previous user input
}

// Function to validate the contact form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var captchaAnswer = document.getElementById("captcha").value;

    // Check if any field is empty
    if (name === "" || email === "" || subject === "" || message === "" || captchaAnswer === "") {
        document.getElementById("error-message").innerText = "All fields are required.";
        return false;
    }

    // Validate the captcha
    var num1 = parseInt(document.getElementById("num1").innerText);
    var num2 = parseInt(document.getElementById("num2").innerText);
    var correctAnswer = num1 + num2;
    var userAnswer = parseInt(captchaAnswer);
    
    if (userAnswer !== correctAnswer) {
        document.getElementById("error-message").innerText = "Incorrect captcha answer. Please try again.";
        generateCaptcha(); // Regenerate the captcha question
        return false;
    }

    // Clear any previous error message
    document.getElementById("error-message").innerText = "";

    return true; // Submit the form if validation passes
}

// Generate the captcha question when the page loads
window.onload = function() {
    generateCaptcha();
};
// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate 10 random math questions
const questions = [];
for (let i = 0; i < 10; i++) {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operator = ['+', '-', '*', '/'][getRandomInt(0, 3)];
  let answer;
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    case '/':
      answer = num1 / num2;
      break;
  }
  questions.push({ question: `What is ${num1} ${operator} ${num2}?`, answer: answer.toString() });
}

let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question
function displayQuestion() {
  const questionDiv = document.getElementById("question");
  questionDiv.textContent = questions[currentQuestionIndex].question;
}

// Function to check the user's answer
function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    alert('Correct!');
    score++;
  } else {
    alert(`Wrong! The correct answer is ${correctAnswer}.`);
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    // Display the user's score
    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Your score: ${score} / ${questions.length}`;
    score = 0; // Reset score for potential retakes
  }

  // Clear the input field for the next question
  document.getElementById("answer").value = "";
}

// Event listener for the submit button
document.getElementById("submit").addEventListener("click", checkAnswer);

// Load the first question when the page loads
window.onload = function() {
  displayQuestion();
};
