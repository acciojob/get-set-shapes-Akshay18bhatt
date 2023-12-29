//complete this code
class Rectangle {
	constructor(width,height){
		this.width= width;
		this.height= height;
	}
	get width(){
		return this.width;
	}
	get height(){
		return this.height;
	}
	getArea(){
		return (this.width * this.height);
	}
}

class Square extends Animal {
	constructor(side){
		this.side=side;
	}
	get width(){
		return this.side;
	}
	get height(){
		return this.side;
	}
	getArea(){
		return (this.side*this.side);
	}
	getPerimeter(){
		return (this.side * 4);
	}
}

class Animal {
	constructor(species){
		this.species=species;
	}
	get getSpecies(){
		return this.species;
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
