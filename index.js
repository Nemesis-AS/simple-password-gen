const uppercaseCharacters = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowercaseCharacters = "qwertyuiopasdfghjklzxcvbnm";
const numberCharacters = "1234567890";
const symbolCharacters = ",./?|)(*&^%$#@!_-=+";

function generate(length = 0, uppercase = false, lowercase = false, numbers = false, symbols = false) {
    let charset = "";

    if (uppercase) charset += uppercaseCharacters;
    if (lowercase) charset += lowercaseCharacters;
    if (numbers) charset += numberCharacters;
    if (symbols) charset += symbolCharacters;

    if (charset == "") return "";

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset[Math.floor(Math.random() * charset.length)];
    }

    return password;
}

function main() {
    document.getElementById("generateBtn").addEventListener("click", e => {
        const len = document.getElementById("pwdlenInput").value;
        const ucase = document.getElementById("uppercaseCheck").checked;
        const lcase = document.getElementById("lowercaseCheck").checked;
        const num = document.getElementById("numberCheck").checked;
        const sym = document.getElementById("symbolCheck").checked;

        const pwd = generate(len, ucase, lcase, num, sym);
        document.getElementById("passwordDiv").innerText = pwd;
        document.getElementById("copyBtn").dataset.pwd = pwd;
    });

    document.getElementById("copyBtn").addEventListener("click", e => {
        if (!e.target.dataset.pwd) return;

        navigator.clipboard.writeText(e.target.dataset.pwd);
        console.log("Copied Password Successfully!");
    });

    document.getElementById("pwdlenInput").addEventListener("input", e => {
        document.getElementById("passwordLength").innerText = e.target.value;
    });

    const pwd = generate(10, true, true, true, true);
    document.getElementById("passwordDiv").innerText = pwd;
    document.getElementById("copyBtn").dataset.pwd = pwd;
}

window.onload = main;