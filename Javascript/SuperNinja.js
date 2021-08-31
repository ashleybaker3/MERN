class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        return console.log(this.name);
    }

    showStats() {
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
    }

    drinkSake() {
        return "Health: " + (this.health+=10);
    }
}

class Sensei extends Ninja {
    constructor(wisdom) {
        super("sensei", 200, 10, 10)
        this.wisdom = 10;
    }

    speakWisdom() {
        const sake = super.drinkSake();
        console.log(sake);
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
console.log(ninja1.drinkSake());

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();