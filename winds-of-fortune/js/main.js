class player {
    gold = 0;
    name = "Default";
    currentLoc = port_royal;
    constructor(name, gold, currentLoc)
    {
        this.name = name;
        this.gold = gold;
        this.currentLoc = currentLoc;
    }
}

class ship {
    name = "";
    speed = 0;
    constructor(name, speed)
    {
        this.name = name;
        this.speed = speed;
    }
}

class port {
    name = "";
    prices = {};
    constructor(name, prices)
    {
        this.name = name;
        this.prices = prices;
    }
}

port_royal = new port("Port Royal", {"wood": 5, "iron": 10, "supplies": 15});
tortuga = new port("Tortuga", {"wood": 6, "iron": 9, "supplies": 14});
nassau = new port("Nassau", {"wood": 4, "iron": 11, "supplies": 16});

let items =
{
    "wood": {name: "Wood", description: "Basic building material.", type: "material", value: 5},
    "iron": {name: "Iron", description: "Used for crafting stronger items.", type: "material", value: 10},
    "supplies": {name: "Supplies", description: "Essential for long voyages.", type: "consumable", value: 15},
}

function checkSave() {
    return localStorage.getItem('saveData') !== null;
}

p1 = new player(0,0);

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
    p1 = new player(0,0,tortuga);
    localStorage.clear();
    console.log("local storage cleared");
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
        player:{
            name: p1.name,
            gold: p1.gold,
            currentLoc: p1.currentLoc,
        },
        ship: {

        }
        // Add more game state data as needed
    };
    localStorage.setItem('saveData', JSON.stringify(saveData));
    console.log("Game saved.");
}

function loadGame() {
    const saveData = JSON.parse(localStorage.getItem('saveData'));
    if (checkSave()) {
        // Load game state from saveData
        console.log("Game loaded.");
        p1 = saveData.player;
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
    document.getElementById("gold-amount").innerHTML = p1.gold;
    document.getElementById("gold-header").innerHTML = p1.gold;
    document.getElementById("port-name").innerHTML = p1.currentLoc.name;
    document.getElementById("wood-price").innerHTML = p1.currentLoc.prices.wood;
    document.getElementById("iron-price").innerHTML = p1.currentLoc.prices.iron;
    document.getElementById("supplies-price").innerHTML = p1.currentLoc.prices.supplies;
}

function buyItem(item)
{
    switch (item)
    {
        case "iron":
            p1.gold-=5;
            break;
    }
    updateUI();
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
            document.getElementById("map").style.display = "block";
            document.getElementById("market").style.display = "none";
            break;
        case 'port':
            document.getElementById("map").style.display = "none";
            document.getElementById("port").style.display = "block";
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

function visitPort(port)
{
    updateLog("Sailing to " + port.name + "...");
    p1.currentLoc = port;
    sleep(2000).then(() => {
        updateLog("Welcome to " + port.name + "!");
        openTab('port');
        updateUI();
    });
}