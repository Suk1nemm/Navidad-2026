
const giftButton = document.getElementById("giftButton");
const surprise = document.getElementById("surprise");

const letterButton = document.getElementById("letterButton");
const jojoLetter = document.getElementById("jojoLetter");

// Primer botón: mostrar el ramo
giftButton.addEventListener("click", () => {
    surprise.classList.remove("hidden");
    giftButton.style.display = "none";

    surprise.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

// Segundo botón: mostrar la carta
letterButton.addEventListener("click", () => {
    jojoLetter.classList.remove("hidden");
    letterButton.style.display = "none";

    jojoLetter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

const openLetterButton = document.getElementById("openLetterButton");
const finalLetter = document.getElementById("finalLetter");

openLetterButton.addEventListener("click", () => {
    finalLetter.classList.remove("hidden");
    openLetterButton.style.display = "none";

    finalLetter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
