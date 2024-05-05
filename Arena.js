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

class Arena {
    //Constructor to intialize playesr in the arena
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
//Method to simulate a match between players and arena
    playMatch() {
        if(this.player1.health < this.player2.health)
        {
            
            //Ensure that every time play diffent player example if flag%2==0 than first player play
            // if not than second player play and last i increase flag by value 1
            let flag =2;
            while (this.player1.health > 0 && this.player2.health > 0) {
                let attackValue, defendValue, damage;
                
                if (flag % 2 == 0) {
                    attackValue = this.player1.attackRoll();
                    defendValue = this.player2.defendRoll();
                    damage = this.player1.attack * attackValue - this.player2.strength * defendValue;
                    // Ensuring damage is non-negative if damage is negative its means plyer defend successfully without healh loss
                    if (damage < 0) damage=0;
                    this.player2.takeDamage(damage);
                }
                else 
                 {
                    attackValue = this.player2.attackRoll();
                    defendValue = this.player1.defendRoll();
                    damage = this.player2.attack * attackValue - this.player1.strength * defendValue;
                    // Ensuring damage is non-negative if damage is negative its means plyer defend successfully without healh loss
                    if (damage < 0) damage = 0; 
                    this.player1.takeDamage(damage);
                }
    
    
                flag++;
            }
            //By Rules if first player health is 0 than second player wins and vice versa
            if(this.player1.health<=0)
            console.log("Player 2 Wins!")
           else
           console.log("Player 1 Wins!") 

        }
        //Second Player start the game
        else
        {
            //In this case i take flag is odd number because second player health is less than first player health  second player start the game
            let flag =3;
            while (this.player1.health > 0 && this.player2.health > 0) {
                let attackValue, defendValue, damage;
                
                if (flag % 2 == 0) {
                    attackValue = this.player1.attackRoll();
                    defendValue = this.player2.defendRoll();
                    damage = this.player1.attack * attackValue - this.player2.strength * defendValue;
                    // Ensuring damage is non-negative if damage is negative its means plyer defend successfully without healh loss
                    if (damage < 0) damage = 0; 
                    this.player2.takeDamage(damage);
                }
                else 
                 {
                    attackValue = this.player2.attackRoll();
                    defendValue = this.player1.defendRoll();
                    damage = this.player2.attack * attackValue - this.player1.strength * defendValue;
                    // Ensuring damage is non-negative
                    if (damage < 0) damage = 0; 
                    this.player1.takeDamage(damage);
                }
    
    
                flag++;
            }
            if(this.player1.health<=0)
            console.log("Player 2 Wins!")
           else
           console.log("Player 1 Wins!") 

        
        }
        

        
    }

}






