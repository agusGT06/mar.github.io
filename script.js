// Efecto de parpadeo para el encabezado
const headerText = document.querySelector("header h1");
let blinking = true;

function blinkHeader() {
    if (blinking) {
        headerText.style.visibility = "hidden";
    } else {
        headerText.style.visibility = "visible";
    }
    blinking = !blinking;
}

setInterval(blinkHeader, 500);

// Efecto de cuenta regresiva
function updateCountdown() {
    const currentDate = new Date();
    const birthdayDate = new Date("2023-10-10T00:00:00"); // Reemplaza YYYY-MM-DD con la fecha del cumpleaños
    const timeLeft = birthdayDate - currentDate;

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `${daysLeft} días ${hoursLeft} horas ${minutesLeft} minutos ${secondsLeft} segundos`;
}

setInterval(updateCountdown, 1000);

// Efecto de confeti
const confettiElement = document.createElement("div");
confettiElement.classList.add("confetti");
document.body.appendChild(confettiElement);

const colors = ["#f06", "#6f0", "#06f", "#f60", "#60f", "#0f6"];

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = Math.random() * 5 + 2 + "s";
    confettiElement.appendChild(confetti);
    setTimeout(() => {
        confetti.remove();
    }, 8000);
}

setInterval(createConfetti, 500);
