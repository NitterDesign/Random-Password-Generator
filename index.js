//RANDOM PASSWORD CHARACTERS by Nitter Design

document.getElementById("generate-btn").addEventListener("click", generatePassword);
document.getElementById("copy-btn").addEventListener("click", copyPassword);

function generatePassword() {
    const length = 10;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return "(Password length must be at least 1)";
    }
    if (allowedChars.length === 0) {
        return "(At least 1 set of characters must be selected)";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand("copy");

    alert("Password copied to clipboard: " + passwordField.value);
}
