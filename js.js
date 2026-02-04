let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");
let generatedPassword = document.getElementById("generated-password");

generateBtn.onclick = () => {
    let lenght = document.getElementById("lenght").value;
    let lowercase = document.getElementById("lowercase").checked;
    let uppercase = document.getElementById("uppercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;

    let charSet = "";

    if (lowercase) {
        charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase) {
        charSet += "ABCDEFGHIJKLMNOPOQRSTUVWXYZ";
    }
    if (numbers) {
        charSet += "0123456789";
    }
    if (symbols) {
        charSet += "!@#$%^&*()_-+={}[];':\",<.>/?";
    }

    if (!charSet) {
        alert("Please select at least one character type.");
        return;
    }

    let password = "";

    for (var i = 0; i < lenght; i++) {
        let randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    generatedPassword.textContent = password;
    copyBtn.style.display = "block";
};

copyBtn.onclick = () => {
    let copy = generatedPassword.textContent;
    navigator.clipboard
        .writeText(copy)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch((error) => {
            alert("Failed to copy password:" + error);
        });
};
