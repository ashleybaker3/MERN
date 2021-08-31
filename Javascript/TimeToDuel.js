class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost),
        this.power = power,
        this.res = res
    }

    showStats() {
        console.log("Name: " + this.name);
        console.log("Power: " + this.power);
        console.log("Res: " + this.res);
    }
    attack(target) {
        target.res -= this.power;
        return target.showStats();
    }

}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost),
        this.text = text,
        this.stat = stat,
        this.magnitude = magnitude
    }

    useCard(target) {
        if(this.stat == "res") {
            target.res += this.magnitude;
        }
        else if(this.stat == "power") {
            target.power += this.magnitude;
        }
        return target.showStats();
    }
}

const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const HardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
const UnhandledPromise = new Effect("Unhandled Promise Rejection", 1, "reduces target's resilience by 2", "res", -2);
const PairProg = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

RedBeltNinja.showStats();
HardAlgo.useCard(RedBeltNinja);
UnhandledPromise.useCard(RedBeltNinja);
PairProg.useCard(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja);