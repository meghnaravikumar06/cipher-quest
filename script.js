// Cipher Quest Logic
const challenges = [
  { cipher: "Uifsf jt b tfdsfu dpnf!", solution: "There is a secret come!" }, // Shift cipher
  { cipher: "Khoor Zruog!", solution: "Hello World!" }, // Caesar cipher
  { cipher: ".... . .-.. .-.. ---", solution: "HELLO" }, // Morse code
];

let currentChallenge = 0;

// Display the first challenge
const cipherText = document.getElementById("cipher-text");
cipherText.textContent = challenges[currentChallenge].cipher;

const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");

// Event listener for the "Submit" button
submitBtn.addEventListener("click", () => {
  const userAnswer = userInput.value.trim();
  if (userAnswer === challenges[currentChallenge].solution) {
    result.textContent = "🎉 Correct! You cracked the code!";
    currentChallenge++;
    if (currentChallenge < challenges.length) {
      // Load the next challenge
      cipherText.textContent = challenges[currentChallenge].cipher;
      userInput.value = "";
      result.textContent = "";
    } else {
      result.textContent = "🎉 Congratulations! You completed all the challenges!";
      cipherText.textContent = "";
      userInput.style.display = "none";
      submitBtn.style.display = "none";
    }
  } else {
    result.textContent = "❌ Incorrect! Try again.";
  }
});
