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

class Square extends Rectangle {
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

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
