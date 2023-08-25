const generateButton = document.getElementById('generate');
const passwordField = document.getElementById('password');
const lengthSelect = document.getElementById('length');
const lengthLabel = document.getElementById('length-label');

const generatePassword = () => {
    const length = parseInt(lengthSelect.value);
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
};

lengthSelect.addEventListener('input', () => {
    const lengthValue = parseInt(lengthSelect.value);
    lengthLabel.textContent = `${lengthValue} caractère${lengthValue !== 1 ? 's' : ''}`;
});

lengthSelect.dispatchEvent(new Event('input'));

generateButton.addEventListener('click', () => {
    const newPassword = generatePassword();
    passwordField.value = newPassword;
});

passwordField.value = generatePassword();
