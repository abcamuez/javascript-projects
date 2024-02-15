class Felidae {
	constructor() {
		this.claws = "retractable";
	}
}

class Panthera extends Felidae {
	constructor() {
    super();
		this.roar = "loud";
	}
}

class Tiger extends Panthera {
	constructor() {
    super();
		this.hasStripes = "true";
	}
}

let tigger = new Tiger();

console.log(tigger);

//Check Your Understanding
//If you had to create classes for a wolf, the canis genus, and the carnivora order, which statement is TRUE about the order of inheritance?

//Wolf is child class of Canis, and Canis is a child class of Carnivora.