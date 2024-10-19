const outputElement = document.getElementById('output');
const warningElement = document.getElementById('warning');
const fakePopupElement = document.getElementById('fake-popup');
const errorSound = document.getElementById('error-sound');
const countdownTimer = document.getElementById('countdown-timer');
const bsodElement = document.getElementById('bsod');
const overlayElement = document.getElementById('overlay');
let shutdownCountdown = 10;
let timerInterval;

const messages = [
    "Initializing hack...",
    "Connecting to target system...",
    "IP address: [192.168.0.12] ...",
    "Accessing files...",
    "Downloading sensitive data...",
    "Warning: Unauthorized system access detected.",
    "Warning: Data breach detected.",
    "Attempting to disable security systems...",
    "Success! Gaining full control...",
    "You are being hacked!",
    "Starting system wipe...",
    "Deleting important files..."
];

let currentIndex = 0;
const delay = 1500;

function displayMessage() {
    if (currentIndex < messages.length) {
        outputElement.innerHTML += `${messages[currentIndex]}\n`;
        currentIndex++;
        setTimeout(displayMessage, delay);
    } else {
        triggerWarning();
    }
}

function triggerWarning() {
    setTimeout(() => {
        warningElement.classList.remove('hidden');
        playErrorSound();
        startCountdown();
        triggerFakePopup();
        triggerPanicOverlay();
    }, 2000);
}

function startCountdown() {
    timerInterval = setInterval(() => {
        shutdownCountdown--;
        countdownTimer.innerText = shutdownCountdown;
        if (shutdownCountdown <= 0) {
            clearInterval(timerInterval);
            showBSOD();
        }
    }, 1000);
}

function triggerFakePopup() {
    setTimeout(() => {
        fakePopupElement.classList.remove('hidden');
        fillProgressBar();
    }, 5000);
}

function fillProgressBar() {
    const progressBar = document.querySelector('.progress-fill');
    progressBar.style.width = '100%';
}

function playErrorSound() {
    errorSound.play().catch(() => {
        document.body.addEventListener('click', () => {
            errorSound.play();
        }, { once: true });
    });
}

function fixNow() {
    fakePopupElement.innerHTML = "<h1>Just Kidding! It's a prank 😂</h1><p>Your system is safe!</p>";
    setTimeout(() => {
        fakePopupElement.classList.add('hidden');
        warningElement.innerHTML = "<h1>Relax, it's just a joke! 😅</h1><p>Nothing happened to your system.</p>";
    }, 4000);
}

function showBSOD() {
    bsodElement.classList.remove('hidden');
    setTimeout(() => {
        bsodElement.innerHTML = "<h1>Just Kidding! Your system is fine 😂 It's a prank 😂</h1>";
    }, 3000);
}

function triggerPanicOverlay() {
    overlayElement.classList.remove('hidden');
    setTimeout(() => {
        overlayElement.classList.add('hidden');
    }, 15000);
}

// Start the "hacking" simulation after page load
window.onload = displayMessage;