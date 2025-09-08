function checkSave() {
    return localStorage.getItem('saveData') !== null;
}

function initialize() {
    if (checkSave()) {
        loadGame();
    } else {
        startNewGame();
    }
}

function startNewGame() {
    // Initialize new game state
    console.log("Starting a new game...");
    // Set up initial player stats, inventory, etc.
    clearLog();
    updateLog("Welcome to Winds of Fortune! Your adventure begins now.");
    sleep(1000).then(() => {
        updateLog("You are a budding captain, eager to make your mark on the seas.");
        sleep(1000).then(() => {
            updateLog("First, you need a ship to sail. Visit the harbor to choose your vessel.");
        });
    });
    // Save initial state
    saveGame();
    updateUI();
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function clearLog() {
    const logDiv = document.getElementById('log');
    logDiv.innerHTML = '';
}

function updateLog(message) {
    const logDiv = document.getElementById('log');
    const entry = document.createElement('div');
    entry.classList.add('log-entry');
    entry.textContent = message;
    logDiv.prepend(entry);
    logDiv.scrollTop = logDiv.scrollHeight; // Auto-scroll to bottom
}

function saveGame() {
    const saveData = {
        // Example game state data
        player: {
            gold: 100,
            inventory: [],
            ship: {
                name: "The Adventurer",
                health: 100,
                speed: 10
            }
        },
        // Add more game state data as needed
    };
    localStorage.setItem('saveData', JSON.stringify(saveData));
    console.log("Game saved.");
}

function loadGame() {
    const saveData = JSON.parse(localStorage.getItem('saveData'));
    if (saveData) {
        // Load game state from saveData
        console.log("Game loaded.");
        updateLog("Welcome back, Captain! Your adventure continues.");
        updateUI();
    } else {
        console.error("No save data found.");
        startNewGame();
    }
}

function updateUI() {
    // Update UI elements based on current game state
    console.log("UI updated.");
    // For example, update gold amount, inventory display, ship status, etc.
}

function openTab(tabName) {
    switch(tabName) {
        case 'log':
            document.getElementById("panel-header").textContent = "Captain’s Log";
            document.getElementById("log").style.display = "block";
            document.getElementById("inventory").style.display = "none";
            document.getElementById("options").style.display = "none";
            document.getElementById("ship-status").style.display = "none";
            break;
        case 'ship':
            document.getElementById("panel-header").textContent = "Ship";
            document.getElementById("log").style.display = "none";
            document.getElementById("inventory").style.display = "none";
            document.getElementById("options").style.display = "none";
            document.getElementById("ship-status").style.display = "block";
            break;
        case 'inventory':
            document.getElementById("panel-header").textContent = "Inventory";
            document.getElementById("log").style.display = "none";
            document.getElementById("inventory").style.display = "block";
            document.getElementById("options").style.display = "none";
            document.getElementById("ship-status").style.display = "none";

            break;
        case 'options':
            document.getElementById("panel-header").textContent = "Options";
            document.getElementById("log").style.display = "none";
            document.getElementById("inventory").style.display = "none";
            document.getElementById("options").style.display = "block";
            document.getElementById("ship-status").style.display = "none";
            break;
        default:
            console.error("Unknown tab: " + tabName);
    }
}