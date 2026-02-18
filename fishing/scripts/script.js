// --- Core game variables ---
let fish = 0;
let fishPerClick = 1;
let fishPerSecond = 0;

let autoPrice = 10;
let rodPrice = 15;

// --- Minigame variables ---
let inMinigame = false;
let sequence = [];
let progress = 0;

// --- DOM elements ---
const fishCountEl = document.getElementById("fishCount");
const fpsEl = document.getElementById("fps");
const fpcEl = document.getElementById("fpc");

const minigameEl = document.getElementById("minigame");
const seqEl = document.getElementById("sequence");
const progressEl = document.getElementById("progress");

// --- Fishing button triggers minigame ---
document.getElementById("fishButton").addEventListener("click", () => {
    if (!inMinigame) {
        startMinigame();
    }
});

// --- Shop buttons ---
document.getElementById("buyAuto").addEventListener("click", () => {
    if (fish >= autoPrice) {
        fish -= autoPrice;
        fishPerSecond += 1;
        autoPrice = Math.floor(autoPrice * 1.3);
        document.getElementById("autoPrice").textContent = autoPrice;
        updateUI();
    }
});

document.getElementById("buyRod").addEventListener("click", () => {
    if (fish >= rodPrice) {
        fish -= rodPrice;
        fishPerClick += 1;
        rodPrice = Math.floor(rodPrice * 1.4);
        document.getElementById("rodPrice").textContent = rodPrice;
        updateUI();
    }
});

// --- UI update ---
function updateUI() {
    fishCountEl.textContent = fish;
    fpsEl.textContent = fishPerSecond;
    fpcEl.textContent = fishPerClick;
}

// --- Passive income ---
setInterval(() => {
    fish += fishPerSecond;
    updateUI();
}, 1000);

// -------------------------------------------------------
//                    MINIGAME LOGIC
// -------------------------------------------------------

function startMinigame() {
    inMinigame = true;
    sequence = generateSequence();
    progress = 0;

    seqEl.textContent = sequence.map(arrowName).join(" ");
    progressEl.textContent = progress;

    minigameEl.style.display = "block";
}

function generateSequence() {
    const dirs = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    const seq = [];
    for (let i = 0; i < 4; i++) {
        seq.push(dirs[Math.floor(Math.random() * dirs.length)]);
    }
    return seq;
}

function arrowName(code) {
    switch (code) {
        case "ArrowUp": return "↑";
        case "ArrowDown": return "↓";
        case "ArrowLeft": return "←";
        case "ArrowRight": return "→";
    }
}

// --- Key handler (single, clean, and safe) ---
document.addEventListener("keydown", (e) => {
    if (!inMinigame) return;

    e.preventDefault();
    if (e.key === sequence[progress]) {
        progress++;
        progressEl.textContent = progress;

        if (progress === 4) {
            completeMinigame();
        }
    } else {
        failMinigame();
    }
});

// --- Minigame success ---
function completeMinigame() {
    inMinigame = false;
    minigameEl.style.display = "none";

    fish += fishPerClick;
    updateUI();
}

// --- Minigame failure ---
function failMinigame() {
    inMinigame = false;
    minigameEl.style.display = "none";
}
