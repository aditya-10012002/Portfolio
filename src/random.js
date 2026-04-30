/**
 * Random Project: Galactic Mission Generator
 * Purpose: Testing repository functionality, commits, and linting.
 */

const MISSION_TYPES = ['Colonization', 'Research', 'Mining', 'Diplomacy', 'Surveillance'];
const PLANETS = ['Mars', 'Europa', 'Titan', 'Kepler-186f', 'Enceladus', 'Gliese 581g'];
const STATUSES = ['In Progress', 'Completed', 'Aborted', 'Scheduled'];

class Mission {
  constructor(id) {
    this.id = id;
    this.name = `Operation ${Math.random().toString(36).substring(7).toUpperCase()}`;
    this.destination = PLANETS[Math.floor(Math.random() * PLANETS.length)];
    this.type = MISSION_TYPES[Math.floor(Math.random() * MISSION_TYPES.length)];
    this.budget = Math.floor(Math.random() * 1000000) + 50000;
    this.status = STATUSES[Math.floor(Math.random() * STATUSES.length)];
    this.timestamp = new Date().toISOString();
  }

  updateStatus(newStatus) {
    if (STATUSES.includes(newStatus)) {
      this.status = newStatus;
      console.log(`[ID: ${this.id}] Status updated to: ${this.status}`);
    }
  }

  calculateRisk() {
    const baseRisk = Math.random() * 10;
    return (this.type === 'Colonization' ? baseRisk + 5 : baseRisk).toFixed(2);
  }
}

class MissionControl {
  constructor() {
    this.missions = [];
    this.logs = [];
  }

  addMission() {
    const id = this.missions.length + 1;
    const mission = new Mission(id);
    this.missions.push(mission);
    this.logAction(`Created mission: ${mission.name}`);
    return mission;
  }

  logAction(message) {
    const entry = `[${new Date().toLocaleTimeString()}] ${message}`;
    this.logs.push(entry);
    if (this.logs.length > 50) this.logs.shift(); // Keep logs lean
  }

  getMissionByPlanet(planet) {
    return this.missions.filter(m => m.destination === planet);
  }

  getTotalBudget() {
    return this.missions.reduce((sum, m) => sum + m.budget, 0);
  }

  generateReport() {
    console.log("--- GALACTIC MISSION REPORT ---");
    console.log(`Total Missions: ${this.missions.length}`);
    console.log(`Active Budget: $${this.getTotalBudget().toLocaleString()}`);
    console.log("-------------------------------");
    
    this.missions.forEach(m => {
      console.log(`${m.name} -> ${m.destination} | Risk Level: ${m.calculateRisk()}%`);
    });
  }

  runSimulations() {
    console.log("Starting background simulations...");
    this.missions.forEach(m => {
      const outcome = Math.random() > 0.2 ? 'Success' : 'Failure';
      this.logAction(`Simulation for ${m.name}: ${outcome}`);
    });
  }
}

// --- Execution Block ---

const control = new MissionControl();

// Populate with 20 random missions
for (let i = 0; i < 20; i++) {
  control.addMission();
}

// Perform random operations
const testPlanet = 'Europa';
const europaMissions = control.getMissionByPlanet(testPlanet);

console.log(`Found ${europaMissions.length} missions targeting ${testPlanet}.`);

if (europaMissions.length > 0) {
  europaMissions[0].updateStatus('Completed');
}

control.runSimulations();

setTimeout(() => {
  control.generateReport();
  console.log("Test execution finished successfully.");
}, 500);

/**
 * End of File
 * Total Lines: ~100 (including comments and whitespace)
 */
