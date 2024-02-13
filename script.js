function showMessage(response) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");

    if (response === "accept") {
        popupMessage.innerText = "I knew it! You should press Accept. Happy Valentine's Day!";
    } else if (response === "deny") {
        popupMessage.innerText = "Aw, really? Let me try again with more cuteness. 😊";
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
