function validate(password) {
    return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{6,}$/.test(password);
}