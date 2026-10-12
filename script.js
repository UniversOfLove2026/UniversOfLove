const frases = [
    "Te amo ❤️",
    "Te quiero 💗",
    "Eres mi todo 💖",
    "Mi amor eterno 💞",
    "Eres mi universo 🌌",
    "Siempre tú 💘",
    "Mi persona favorita 🥰",
    "Contigo todo es mejor 💕",
    "Eres mi felicidad ✨",
    "Te adoro 💓",
    "Mi corazón es tuyo 💝",
    "Eres mi estrella 🌟",
    "Me encantas 💗",
    "Tú y yo 💞",
    "Amor infinito ♾️",
    "Pienso en ti 💭",
    "Mi sueño bonito 💖",
    "Te elegiría mil veces 💘",
    "Iluminas mi mundo ✨",
    "Cada día te quiero más 💕",
    "Eres mi alegría ❤️",
    "Mi lugar favorito eres tú 💗",
    "Nunca olvides cuánto te quiero 💌",
    "Eres magia en mi vida 💜",
    "Un millón de besitos 💋",
    "Qué bonito coincidir contigo 🌷",
    "Mi estrella favorita ⭐",
    "Tú haces todo más bonito 💞",
    "Te amo muchísimo 🥹",
    "Para siempre en mi corazón 💖"
];

const zonaFrases = document.getElementById("frases");
const boton = document.getElementById("botonAmor");
const mensaje = document.getElementById("mensaje");

function crearFrase() {
    const texto = document.createElement("div");

    texto.className = "frase";
    texto.textContent =
        frases[Math.floor(Math.random() * frases.length)];

    texto.style.left = Math.random() * 75 + 5 + "vw";
    texto.style.top = Math.random() * 75 + 10 + "vh";

    zonaFrases.appendChild(texto);

    setTimeout(() => texto.remove(), 5000);
}

setInterval(crearFrase, 500);

boton.addEventListener("click", () => {
    mensaje.textContent = "¡Todo mi amor es para ti! 💗✨";

    for (let i = 0; i < 15; i++) {
        setTimeout(crearFrase, i * 100);
    }
});