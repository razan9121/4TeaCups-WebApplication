const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const captchaAnswerInput = document.getElementById('captcha-answer');
const num1Span = document.getElementById('num1');
const num2Span = document.getElementById('num2');

function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    num1Span.textContent = num1;
    num2Span.textContent = num2;
    return num1 + num2;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    if (nameInput.value === '' || emailInput.value === '' || subjectInput.value === '' || messageInput.value === '') {
        alert('Please fill out all required fields.');
        isValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    const correctAnswer = generateCaptcha();
    if (captchaAnswerInput.value !== correctAnswer.toString()) {
        alert('Incorrect captcha answer. Please try again.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

generateCaptcha();