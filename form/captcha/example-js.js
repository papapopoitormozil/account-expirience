document.addEventListener('DOMContentLoaded', () => {
    const captchaContainer = document.getElementById('captcha');
    const captchaForm = document.getElementById('captcha-form');
    const captchaInput = document.getElementById('captcha-input');
    const captchaResult = document.getElementById('captcha-result');
    const spinner = document.querySelector(".loader")
    
    function generateCaptcha() {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        captchaContainer.textContent = `${num1} + ${num2} = ?`;
        return num1 + num2;
    }

    let captchaSolution = generateCaptcha();

    captchaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userAnswer = parseInt(captchaInput.value);
        if (userAnswer === captchaSolution) {
            captchaResult.textContent = 'Correct! Redirect in 3 seconds...';
            captchaResult.style.color = 'green';
            spinner.style.display = "inline-block"
            setTimeout(nextPage, 3000)
        } else {
            captchaResult.textContent = 'Incorrect. Try again.';
            captchaResult.style.color = 'red';
            captchaInput.value = '';
            captchaSolution = generateCaptcha(); // Обновляем капчу при неверном ответе
        }
    });
});

    function nextPage() {
        window.location.href = "../profile/profile.html"
    }