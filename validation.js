function validateForm(username, password, email) {
    const isUsernameValid = username.length >= 3;
    const isPasswordValid = password.length >= 8;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(email);

    return {
        isUsernameValid,
        isPasswordValid,
        isEmailValid
    };
}

module.exports = validateForm;

