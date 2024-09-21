// Correct password
const correctPassword = "fiona"; // Password is now set to "fiona"

// Track number of attempts
let attempts = 10;

const form = document.getElementById("loginForm");
const passwordField = document.getElementById("password");
const attemptsLeftText = document.getElementById("attemptsLeft");
const message = document.getElementById("message");
const hint = document.getElementById("hint");
const surpriseMessage = document.getElementById("surpriseMessage");

// Prevent form from refreshing the page
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    const userInput = passwordField.value.trim(); // Get user input and trim spaces

    console.log("User input: ", userInput); // Debug: Show the user input in console
    console.log("Correct password: ", correctPassword); // Debug: Show the correct password

    if (userInput === correctPassword) {
        // If the password is correct, reveal the surprise
        console.log("Password correct! Revealing the surprise...");
        surpriseMessage.classList.remove("hidden");  // Show surprise section
        form.classList.add("hidden");  // Hide the form
        message.textContent = "Correct! You've unlocked the surprise!";
    } else {
        attempts--;  // Reduce number of attempts if incorrect
        console.log("Attempts left: ", attempts); // Debug: Show attempts left in console
        attemptsLeftText.textContent = `Attempts left: ${attempts}`; // Update UI for attempts left

        if (attempts === 0) {
            // When no attempts left, show a clue and disable form
            hint.classList.remove("hidden"); // Reveal the hint
            message.textContent = "No more attempts left. Here's a clue!";
            form.querySelector("button").disabled = true; // Disable further attempts
        } else {
            message.textContent = "Incorrect password, try again.";
        }
    }

    passwordField.value = "";  // Clear the input field after submission
});
