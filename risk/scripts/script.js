// Player class
class Player {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.territories = [];
    }

    addTerritory(territory) {
        this.territories.push(territory);
        territory.owner = this;
        territory.updateDisplay();
    }

    removeTerritory(territory) {
        this.territories = this.territories.filter(t => t !== territory);
        territory.owner = null;
        territory.updateDisplay();
    }
}

// Territory class
class Territory {
    constructor(id, element) {
        this.id = id;
        this.element = element;
        this.owner = null;
        this.armies = 0;

        // Event listener for clicks
        this.element.addEventListener('click', () => this.select());
    }

    addArmies(count) {
        this.armies += count;
        this.updateDisplay();
    }

    removeArmies(count) {
        this.armies = Math.max(this.armies - count, 0);
        this.updateDisplay();
    }

    updateDisplay() {
        this.element.textContent = `${this.id} (${this.armies})`;
        this.element.style.backgroundColor = this.owner ? this.owner.color : '#cfcfcf';
    }

    select() {
        // Deselect all territories
        territories.forEach(t => t.element.classList.remove('selected'));

        // Select this territory
        this.element.classList.add('selected');

        // Update info panel
        const ownerName = this.owner ? this.owner.name : "None";
        document.getElementById('info').innerHTML = `
            <p>You selected <strong>${this.id}</strong>.</p>
            <p>Owner: ${ownerName}</p>
            <p>Armies: ${this.armies}</p>
        `;
    }
}

// Initialize territories
const territoryElements = document.querySelectorAll('.territory');
const territories = Array.from(territoryElements).map(el => new Territory(el.id, el));

// Example: Initialize players
const player1 = new Player("Alice", "#ff6666");
const player2 = new Player("Bob", "#6666ff");

// Assign territories
player1.addTerritory(territories[0]);
player2.addTerritory(territories[1]);
territories[2].updateDisplay();
