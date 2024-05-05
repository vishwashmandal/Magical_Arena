class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }
//Method to simulate players taking damage
    takeDamage(damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }
 // Roll a 6-sided die for attack
    attackRoll() {
       
        return Math.floor(Math.random() * 6) + 1;
    }
//  Roll a 6-sided die for deffend
    defendRoll()
    {
        return Math.floor(Math.random() * 6) + 1; 
    }
}





