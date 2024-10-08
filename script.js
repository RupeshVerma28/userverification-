document.addEventListener('DOMContentLoaded', function () {
    const captchaQuestion = document.getElementById('captcha-question');
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    captchaQuestion.textContent = `What is ${num1} + ${num2}?`;

    window.verifyCaptcha = function () {
        const userAnswer = parseInt(document.getElementById('captcha-answer').value);
        const resultMessage = document.getElementById('result-message');

        if (userAnswer === num1 + num2) {
            resultMessage.textContent = "Verification successful!";
            resultMessage.style.color = "#00ff00"; // Green color for success
        } else {
            resultMessage.textContent = "Incorrect, please try again.";
            resultMessage.style.color = "#ff0000"; // Red color for failure
        }
    };
});
