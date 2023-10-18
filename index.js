"use strict";
class A {
    constructor() {
        this.color = "red";
    }
    setColor(color) {
        this.color = color;
    }
}
const obj1 = new A();
obj1.setColor("blue");
console.log("obj1", obj1.color);
const obj2 = new A();
console.log("obj2", obj2.color);
// Use static keyword
// class A {
//     static color:string = "red";
//     setColor (color:string){
//         // this.color = color
//     }
//     getColor(){
//         return A.color
//     }
// }
// const obj1 = new A();
// obj1.getColor()
// console.log("obj1",obj1);
// const obj2 = new A();
// obj2.getColor()
// console.log("obj2",obj2);
