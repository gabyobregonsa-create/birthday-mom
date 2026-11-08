// ELEMENTOS DE LA PÁGINA

const welcomeScreen = document.getElementById("welcomeScreen");
const surpriseScreen = document.getElementById("surpriseScreen");
const openGift = document.getElementById("openGift");
const coffin = document.getElementById("coffin");
const candles = document.querySelectorAll(".candle");


// ABRIR LA SORPRESA

openGift.addEventListener("click", function() {

    const welcomeContent = document.querySelector(".welcome-content");

    welcomeContent.classList.add("is-hidden");

    setTimeout(function() {

        surpriseScreen.classList.add("is-active");

    }, 700);

});


// ABRIR EL ATAÚD

coffin.addEventListener("click", function() {

    // Evita que se active varias veces
    if (coffin.classList.contains("is-open")) {
        return;
    }

    coffin.classList.add("is-open");

    // Esperar a que termine la animación de la tapa
    setTimeout(function() {

        surpriseScreen.classList.add("characters-visible");

       }, 1800);

});


// ENCENDER Y APAGAR LAS VELAS INDIVIDUALMENTE

candles.forEach(function(candle) {

    candle.addEventListener("click", function(event) {

        event.stopPropagation();

        candle.classList.toggle("is-lit");

        const encendida = candle.classList.contains("is-lit");

        candle.setAttribute("aria-pressed", encendida);

        candle.setAttribute(
            "aria-label",
            encendida ? "Apagar vela" : "Encender vela"
        );

    });

});
const openLetter = document.getElementById("openLetter");
const letterOverlay = document.getElementById("letterOverlay");
const closeLetter = document.getElementById("closeLetter");

openLetter.addEventListener("click", function(event) {
    event.stopPropagation();
    letterOverlay.classList.add("is-open");
});

closeLetter.addEventListener("click", function() {
    letterOverlay.classList.remove("is-open");
});