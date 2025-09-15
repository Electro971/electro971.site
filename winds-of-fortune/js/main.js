let items =
{
    "wood": {name: "Wood", description: "Basic building material.", type: "material", value: 5},
    "iron": {name: "Iron", description: "Used for crafting stronger items.", type: "material", value: 10},
    "supplies": {name: "Supplies", description: "Essential for long voyages.", type: "consumable", value: 15},
}

cargo = 
{
    "wood": 0,
    "iron": 0,
}

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
    logDiv.scrollTop = 0; // Scroll to top to show the latest entry
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
            document.getElementById("port").style.display = "block";
            document.getElementById("map").style.display = "none";
            break;
        case 'ship':
            document.getElementById("panel-header").textContent = "Ship";
            document.getElementById("log").style.display = "none";
            document.getElementById("inventory").style.display = "none";
            document.getElementById("options").style.display = "none";
            document.getElementById("ship-status").style.display = "block";
            document.getElementById("port").style.display = "none";
            document.getElementById("map").style.display = "none";
            break;
        case 'inventory':
            document.getElementById("panel-header").textContent = "Inventory";
            document.getElementById("log").style.display = "none";
            document.getElementById("inventory").style.display = "block";
            document.getElementById("options").style.display = "none";
            document.getElementById("ship-status").style.display = "none";
            document.getElementById("port").style.display = "none";
            document.getElementById("map").style.display = "none";
            break;
        case 'options':
            document.getElementById("panel-header").textContent = "Options";
            document.getElementById("log").style.display = "none";
            document.getElementById("inventory").style.display = "none";
            document.getElementById("options").style.display = "block";
            document.getElementById("ship-status").style.display = "none";
            document.getElementById("port").style.display = "none";
            document.getElementById("map").style.display = "none";
            break;
        case 'map':
            document.getElementById("port").style.display = "none";
            document.getElementById("map").style.display = "none";
            document.getElementById("map").style.display = "block";
            document.getElementById("market").style.display = "none";
            break;
        case 'market':
            document.getElementById("harbour").style.display = "none";
            document.getElementById("tavern").style.display = "none";
            document.getElementById("market").style.display = "block";
            break;
        case 'harbour':
            document.getElementById("market").style.display = "none";
            document.getElementById("tavern").style.display = "none";
            document.getElementById("harbour").style.display = "block";
            break;
        case 'tavern':
            document.getElementById("market").style.display = "none";
            document.getElementById("harbour").style.display = "none";
            document.getElementById("tavern").style.display = "block";
            break;
        default:
            console.error("Unknown tab: " + tabName);
    }
}

function setSail()
{
    updateLog("Set sail on your adventure!");
    openTab('map');
}

function visitPort(portName)
{
    updateLog("Sailing to " + portName + "...");
    sleep(2000).then(() => {
        updateLog("Welcome to " + portName + "!");
    });
}