const validateForm = require('./validation');

test('Nom d\'utilisateur trop court', () => {
    const result = validateForm('ab', 'password123', 'test@example.com');
    expect(result.isUsernameValid).toBe(false);
});

test('Mot de passe trop court', () => {
    const result = validateForm('username', 'pass', 'test@example.com');
    expect(result.isPasswordValid).toBe(false);
});

test('Email invalide', () => {
    const result = validateForm('username', 'password123', 'invalidemail');
    expect(result.isEmailValid).toBe(false);
});

test('Tous les champs valides', () => {
    const result = validateForm('username', 'password123', 'test@example.com');
    expect(result.isUsernameValid).toBe(true);
    expect(result.isPasswordValid).toBe(true);
    expect(result.isEmailValid).toBe(true);
});
