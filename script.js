// Function for passcode validation
function validatePasscode(input) {
    const passcode = '140269';
    return input === passcode;
}

// Function for page navigation
function navigateTo(page) {
    window.location.href = page;
}

// Heart animation gallery functionality
function setupHeartAnimation() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.addEventListener('click', () => {
            heart.classList.toggle('animate');
        });
    });
}

// Function to save final message
function saveFinalMessage(message) {
    localStorage.setItem('finalMessage', message);
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    setupHeartAnimation();
});
