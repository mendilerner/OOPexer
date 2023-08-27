// 3
class Shape {
    info(): void {
        console.log("This is a Shape");
    }
}
// 1
class Rectangle extends Shape {
    width: number;
    hight: number
    constructor(width: number, hight: number) {
        super()
        this.width = width
        this.hight = hight
    }

    area(): number {
        return this.width * this.hight
    }
    info(): void {
        console.log("This is a Rectangle");
    }
}

// 2
class Square extends Rectangle {
    len: number
    constructor(len: number) {
        super(len, len)
        this.len = len
    }
    area(): number {
        return this.len ** 2
    }

}
// let a: Rectangle= new Rectangle(6, 7)
// a.info()

// 3
class ColorRectangle extends Rectangle {
    color: string
    constructor(width: number, hight: number, color: string) {
        super(width, hight)
        this.color = color
    }
    info(): void {
        console.log(`This is a Rectangle with ${this.color} color`);
    }
}
// const redRec: ColorRectangle = new ColorRectangle(4,5,'red')
// redRec.info();

class ShapeB {
    draw(): void{
        console.log('drawing a shape');
    }
}

class Triangle extends ShapeB{
    draw(): void{
        console.log('drawing a triangle');
    }
}

class Circle extends ShapeB{
    draw(): void{
        console.log('drawing a circle');
    }
}

class SquareB extends ShapeB{
    draw() {
        console.log('drawing a square');
    }
}
function renderShapes (shapeArr: ShapeB[]) {
    shapeArr.forEach((shape) => {
        shape.draw()
    });
}
const shape = new ShapeB();
const triangle = new Triangle();
const circle = new Circle();
const square = new SquareB();
renderShapes([shape, triangle, circle, square])