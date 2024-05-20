const questions = [
    { question: "What is 2 + 3?", answer: 5 },
    { question: "What is 7 x 4?", answer: 28 },
    { question: "What is 12 / 3?", answer: 4 },
    { question: "What is the square root of 9?", answer: 3 },
    { question: "What is 10 - 5?", answer: 5 },
    { question: "What is 8 x 8?", answer: 64 },
    { question: "What is 15 / 5?", answer: 3 },
    { question: "What is the cube root of 27?", answer: 3 },
    { question: "What is 20 + 10?", answer: 30 },
    { question: "What is 99 - 1?", answer: 98 },
];

let currentQuestion = 0;
let score = 0;

function generateQuestion() {
    const questionElement = document.getElementById("questions");
    questionElement.innerHTML = "";

    const question = questions[currentQuestion];
    questionElement.innerHTML = `<p class="question">${question.question}</p>`;

    const userInput = document.createElement("input");
    userInput.type = "number";
    questionElement.appendChild(userInput);
}

function submitAnswers() {
    const userInput = document.querySelector("#questions input");
    const userAnswer = parseInt(userInput.value);

    const currentQuestionAnswer = questions[currentQuestion].answer;

    if (userAnswer === currentQuestionAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion === questions.length) {
        displayScore();
    } else {
        generateQuestion();
        userInput.value = "";
    }
}

function displayScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Your score is: ${score} out of ${questions.length}`;
    document.getElementById("submit-btn").disabled = true;
}

generateQuestion();

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", submitAnswers);