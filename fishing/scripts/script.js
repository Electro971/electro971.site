let fish = 0;
let fishPerClick = 1;
let fishPerSecond = 0;

let autoPrice = 10;
let rodPrice = 15;

const fishCountEl = document.getElementById("fishCount");
const fpsEl = document.getElementById("fps");
const fpcEl = document.getElementById("fpc");

document.getElementById("fishButton").addEventListener("click", () => {
    fish += fishPerClick;
    updateUI();
});

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

function updateUI() {
    fishCountEl.textContent = fish;
    fpsEl.textContent = fishPerSecond;
    fpcEl.textContent = fishPerClick;
}

// Passive income loop
setInterval(() => {
    fish += fishPerSecond;
    updateUI();
}, 1000);
