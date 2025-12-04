// ===============================
// Tavern Master — Basic Game Loop
// ===============================

// --- Game State ---
const state = {
  minute: 480, // start at 8:00 (in minutes)
  day: 1,
  gold: 120,
  stock: 70,
  reputation: 42,

  tables: [
    { id: 1, status: "Occupied", patrons: ["Aldric", "Bryn"] },
    { id: 2, status: "Waiting", patrons: ["Selene"] },
    { id: 3, status: "Empty", patrons: [] }
  ]
};

// --- Utilities ---
function formatTime(mins) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}:${m.toString().padStart(2, "0")}`;
}

function logEntry(text) {
  const ledger = document.querySelector(".ledger");
  const entry = document.createElement("div");
  entry.className = "entry";
  entry.textContent = `[${formatTime(state.minute)}] ${text}`;
  ledger.appendChild(entry);
  ledger.scrollTop = ledger.scrollHeight;
}

// --- UI Updating ---
function updateUI() {
  // Header meta
  document.querySelector(".tavern-meta .small:nth-child(1)")
          .textContent = `Day ${state.day} · ${formatTime(state.minute)}`;
  document.querySelector(".tavern-meta .small:nth-child(2)")
          .textContent = `Reputation: ${state.reputation}`;

  // Stats
  document.querySelector(".stat:nth-child(1)").lastChild.textContent = state.gold;
  document.querySelector(".stat:nth-child(2)").lastChild.textContent = state.stock + "%";

  // Gauge
  document.querySelector(".gauge > i").style.width = `${state.reputation}%`;

  // Tables
  const tableCards = document.querySelectorAll(".table-card");
  tableCards.forEach((card, i) => {
    const table = state.tables[i];

    card.querySelector(".table-status").textContent = table.status;

    // Patron list
    const row = card.querySelector(".row");
    row.innerHTML = "";
    table.patrons.forEach(name => {
      const div = document.createElement("div");
      div.className = "patron";
      div.innerHTML = `<div class="avatar">${name[0]}</div> ${name}`;
      row.appendChild(div);
    });

    // Toggle effects
    const steam = card.querySelector(".steam");
    const sparkle = card.querySelector(".sparkle");
    if (steam) steam.style.display = table.status === "Occupied" ? "block" : "none";
    if (sparkle) sparkle.style.display = table.status === "Empty" ? "block" : "none";
  });
}

// --- Simulation Tick ---
function tick() {
  state.minute += 5;

  // Advance day at midnight
  if (state.minute >= 1440) {
    state.minute = 0;
    state.day++;
    logEntry("A new day dawns over the Copper Kettle.");
  }

  // Random events
  const roll = Math.random();

  if (roll < 0.25) {
    // Patron arrives
    const name = randomName();
    const empty = state.tables.find(t => t.status === "Empty");
    if (empty) {
      empty.status = "Occupied";
      empty.patrons = [name];
      logEntry(`${name} takes a seat at Table ${empty.id}.`);
    }
  }

  else if (roll < 0.45) {
    // Patron leaves
    const occ = state.tables.filter(t => t.status === "Occupied");
    if (occ.length) {
      const t = occ[Math.floor(Math.random() * occ.length)];
      logEntry(`Patrons depart from Table ${t.id}.`);
      t.patrons = [];
      t.status = "Empty";
    }
  }

  else if (roll < 0.55) {
    // Gold earned passively
    const amt = Math.floor(Math.random() * 5) + 3;
    state.gold += amt;
    logEntry(`You earned ${amt} gold from sales.`);
  }

  // UI refresh
  updateUI();
}

// --- Random Name Generator ---
function randomName() {
  const names = [
    "Aldric", "Bryn", "Selene", "Torren", "Maeve",
    "Isolde", "Corvin", "Lysa", "Dorian", "Elric"
  ];
  return names[Math.floor(Math.random() * names.length)];
}

// --- Buttons ---
document.querySelector(".btn-primary").addEventListener("click", () => {
  if (state.stock > 0) {
    state.gold += 4;
    state.stock -= 2;
    logEntry("You served ale to a thirsty adventurer.");
  } else {
    logEntry("You're out of stock! Refill soon.");
  }
  updateUI();
});

document.querySelector(".btn-danger").addEventListener("click", () => {
  const occ = state.tables.find(t => t.status === "Occupied");
  if (occ) {
    logEntry(`You escorted a rowdy patron out of Table ${occ.id}.`);
    occ.status = "Empty";
    occ.patrons = [];
    state.reputation -= 2;
  } else {
    logEntry("No troublemakers at the moment.");
  }
  updateUI();
});

// --- Start the Game ---
updateUI();
setInterval(tick, 3000); // every 3 seconds
