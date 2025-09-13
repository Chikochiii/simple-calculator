const display = document.getElementById("display");
const themeToggle = document.getElementById("themeToggle");
const historyBox = document.getElementById("history");

let currentInput = "0";
let history = [];

function playClickSound() {
  const audio = new Audio("/src/click.mp3"); 
  audio.volume = 0.10;
  audio.play();
}

function updateDisplay() {
  display.textContent = currentInput;
}

function updateHistory() {
  historyBox.innerHTML = history.map(item => `<div>${item}</div>`).join("");
}

document.querySelectorAll(".buttons button").forEach(button => {
  button.addEventListener("click", () => {
    playClickSound();
    const value = button.textContent;

    if (value === "C") {
      currentInput = "0";
    } else if (value === "=") {
      try {
        const result = eval(currentInput).toString();
        history.push(`${currentInput} = ${result}`);
        if (history.length > 2) history.shift();
        currentInput = result;
        updateHistory();
      } catch {
        currentInput = "Error";
      }
    } else {
      if (currentInput === "0" || currentInput === "Error") {
        currentInput = value;
      } else {
        currentInput += value;
      }
    }
    updateDisplay();
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = 
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

updateDisplay();
