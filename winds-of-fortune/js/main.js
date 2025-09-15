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
    cargo = {"wood":0, "iron":0, "supplies":0};
    constructor(name, speed, cargo)
    {
        this.name = name;
        this.speed = speed;
        this.cargo = cargo;
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

let items =
{
    "wood": {name: "Wood", description: "Basic building material.", type: "material", value: 5},
    "iron": {name: "Iron", description: "Used for crafting stronger items.", type: "material", value: 10},
    "supplies": {name: "Supplies", description: "Essential for long voyages.", type: "consumable", value: 15},
}

port_royal = new port("Port Royal", {"wood": items.wood.value, "iron": items.iron.value, "supplies": items.supplies.value});
tortuga = new port("Tortuga", {"wood": items.wood.value, "iron": items.iron.value, "supplies": items.supplies.value});

function checkSave() {
    return localStorage.getItem('saveData') !== null;
}

p1 = new player("default",1000);
s1 = new ship("",0,{"wood":0, "iron":0, "supplies":0});

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
    p1 = new player("Default",100,tortuga);
    s1 = new ship("The Default",0,{"wood":0, "iron":0, "supplies":0});
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
    document.getElementById("wood-amount").innerHTML = s1.cargo.wood;
    document.getElementById("iron-amount").innerHTML = s1.cargo.iron;
    document.getElementById("supplies-amount").innerHTML = s1.cargo.supplies;
}

function randomizePrices()
{
    for (let thing in tortuga.prices) {
        tortuga.prices[thing] = Math.floor(Math.random() * (items[thing].value * 2 - items[thing].value / 2)) + items[thing].value / 2;
    }
    for (let thing in port_royal.prices) {
        port_royal.prices[thing] = Math.floor(Math.random() * (items[thing].value * 2 - items[thing].value / 2)) + items[thing].value / 2;
    }
}

function buyItem(item)
{
    let quantity = parseInt(document.getElementById("quantity").value);
    p1.gold -= (p1.currentLoc.prices[item]) * quantity;
    s1.cargo[item] += quantity;
    updateUI();
}

function sellItem(item)
{
    let quantity = parseInt(document.getElementById("quantity").value);
    if (s1.cargo[item] < quantity) {
        updateLog("You don't have enough " + items[item].name + " to sell.");
        return;
    }
    s1.cargo[item] -= quantity;
    p1.gold += (p1.currentLoc.prices[item]) * quantity;
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
    if (s1.cargo["supplies"] <= 0) {
        updateLog("You need supplies to set sail!");
        return;
    }
    updateLog("Set sail on your adventure!");
    openTab('map');
    s1.cargo["supplies"] -= 1;
    randomizePrices();
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