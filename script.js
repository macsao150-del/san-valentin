const messages = [
    "¿Seguro?",
    "¿Seguro, seguro??",
    "Muy, muy seguro???",
    "Andale, mi corazoooooón...",
    "Piensalo!",
    "Si dices que no, me voy a poner muy triste...",
    "Voy a estar muy triste...",
    "Muy, muy, muy, muuuuy triste...",
    "Esta bien, ya voy a dejar de insistir...",
    "Mentiraaa, di que si, precioso! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}