"use strict"

function generateWelcome() {
    const username = prompt("Hi. What's your name?");

    let spanText = username ? `Hello ${username}! `: "";
    spanText += "Please visit one of my social links below."

    document.getElementById("username").textContent = spanText;
}