const deepBtn = document.getElementById("deep");
const lightBtn = document.getElementById("light");
const quickBtn = document.getElementById("quick");
const result = document.getElementById("result");
const timerDisplay = document.getElementById("timer");
const card = document.querySelector(".card");

let countdown;

// Function to start timer
function startTimer(minutes) {
    clearInterval(countdown);

    let time = minutes * 60;

    countdown = setInterval(() => {
        let mins = Math.floor(time / 60);
        let secs = time % 60;

        timerDisplay.textContent =
            `${mins}:${secs < 10 ? "0" : ""}${secs}`;

        time--;

        if (time < 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!";
        }
    }, 1000);
}

// Deep Focus
deepBtn.onclick = function () {
    result.textContent = " Deep focus session started!";
    startTimer(60);

    card.classList.remove("deep-theme", "light-theme", "quick-theme");
    card.classList.add("deep-theme");
};

// Light Work
lightBtn.onclick = function () {
    result.textContent = " Light work session started!";
    startTimer(30);

    card.classList.remove("deep-theme", "light-theme", "quick-theme");
    card.classList.add("light-theme");
};

// Quick Tasks
quickBtn.onclick = function () {
    result.textContent = " Quick task session!";
    startTimer(10);

    card.classList.remove("deep-theme", "light-theme", "quick-theme");
    card.classList.add("quick-theme");
};