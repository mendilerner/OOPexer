"use strict";
// 3
class Shape {
    info() {
        console.log("This is a Shape");
    }
}
// 1
class Rectangle extends Shape {
    constructor(width, hight) {
        this.width = width;
        this.hight = hight;
    }
    area() {
        return this.width * this.hight;
    }
}
// 2
class Square extends Rectangle {
    constructor(len) {
        super(len, len);
        this.len = len;
    }
    area() {
        return this.len ** 2;
    }
}
// let a: Square= new Square(6)
// console.log(a.area());
