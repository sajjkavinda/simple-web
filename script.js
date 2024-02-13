const denyMessages = [
    "Aw, really? Let me try again with more cuteness babiiiiooo. 😊",
    "Oh no! Are you sure? Think twice babiiii! 😢",
    "Don't break my heart! Give it another shot Peeaacchhhheess. ❤️",
    "I can be even more charming! Please reconsider. 😘"
];

function showMessage(response) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");

    if (response === "accept") {
        popupMessage.innerText = "I knew it! You should press Accept. Happy Valentine's Day!";
    } else if (response === "deny") {
        const randomMessage = denyMessages[Math.floor(Math.random() * denyMessages.length)];
        popupMessage.innerText = randomMessage;
    }

    popup.style.display = "block";
    setTimeout(function () {
        popup.classList.add("show");
    }, 10); // Delay the class addition for the transition to work properly
}

function hidePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("show");

    // Hide the popup after the transition is complete
    setTimeout(function () {
        popup.style.display = "none";
    }, 300);
}
