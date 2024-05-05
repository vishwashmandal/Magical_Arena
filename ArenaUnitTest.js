// Import the classes from Arrena File
const Player = require('./Arena').Player;
const Arena = require('./Arena').Arena;


// Define a function to compare actual and expected values
function assertEquals(actual, expected, message) {
    if (actual === expected) {
        console.log(`Pass--> ${message}`);
    } else {
        console.error(`Fail--> ${message}: Expected ${expected}, but got ${actual}`);
    }
}

// Test cases for the Player class
console.log("Testing Player class:");

// Test constructor
const player = new Player(50, 5, 10);
assertEquals(player.health, 50, "Player health should be 50");
assertEquals(player.strength, 5, "Player strength should be 5");
assertEquals(player.attack, 10, "Player attack should be 10");

// Test attackRoll() method
const attackRoll = player.attackRoll();
assertEquals(attackRoll >= 1 && attackRoll <= 6, true, "attackRoll() should return a number between 1 and 6");

//Test defendRoll() method 
const defendRoll = player.defendRoll();
assertEquals(defendRoll >= 1 && defendRoll <= 6, true, "defendRoll() should return a number between 1 and 6");


// Test takeDamage() method
player.takeDamage(20);
assertEquals(player.health, 30, "Player health should decrease to 30 after taking 20 damage");

// Test TakeDamage() method with negative damage {should not decrease health}
player.takeDamage(-10);
assertEquals(player.health,40,"Player Health should reamain unchanged when negative damage is taken")

// Test cases for the Arena class
console.log("\nTesting Arena class:");

// Example usage
const player1 = new Player(50, 5, 10);
const player2 = new Player(100, 10, 5);

const arena = new Arena(player1, player2);
arena.playMatch();
