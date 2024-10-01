const validateForm = require('./validation');

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    const { isUsernameValid, isPasswordValid, isEmailValid } = validateForm(username, password, email);

    if (isUsernameValid && isPasswordValid && isEmailValid) {
        alert('Formulaire valide');
    } else {
        alert('Erreur de validation');
    }
});
