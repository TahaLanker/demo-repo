//object literals
let circle = {
  radius: 1, //properties
  location: {
    //properties
    x: 1,
    y: 1,
  },
  draw: function () {
    //methods
    console.log("Draw");
  },
};
circle.draw();

//Factory Function
function createCircle(radius) {
  let circleObj = {
    radius,
    draw: function () {
      console.log("Draw Circle");
    },
  };
  return circleObj;
}
let factory_circle = createCircle(2);
factory_circle.draw();

//Constructor Function
function CreateConstCircle(radius) {
  this.radius = radius;
  //abstarction
  let location = {
    x: 1,
    y: 1,
  };
  this.getLocation = function () {
    console.log("location", location);
  };
  let computeLocation = function () {};
  this.draw = function () {
    //accessing propeerties
    computeLocation();
    //location
    //this.radius
    console.log("Draw Contructor Circle");
  };

  //getter/setter
  Object.defineProperty(this, "location", {
    get: function () {
      return location;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Wrong Location");

      location = value;
    },
  });
}
let constructor_circle = new CreateConstCircle(2);
constructor_circle.draw();
constructor_circle.location = { x: 1, y: 2 };
constructor_circle.getLocation();

//for loop for fetching keys value pair
// for (let keys in constructor_circle) {
//   if (typeof constructor_circle[keys] !== "function")
//     console.log("key value", constructor_circle[keys]);
// }
// //fetch only keys
// let keys = Object.keys(constructor_circle);
// console.log("keys only", keys);
// //check if object has property
// if ("radius" in constructor_circle) console.log("Circle has radius property");

///////////////****************ES6 Class*****************////////////
class Basic {
  constructor() {
    console.log("This is a basic class description!!");
  }
}
let myBasic = new Basic();

//generic class
class Reactangle {
  constructor(_w, _h, _c) {
    this.width = _w;
    this.height = _h;
    this.color = _c;
  }

  getArea() {
    return this.width * this.height;
  }

  //getter********
  get circumfrence() {
    return 2 * this.width + 2 * this.height;
  }

  //setter*******
  //   set area(area) {
  //     this.width = area;
  //     this.height = area;
  //   }
}

let rect1 = new Reactangle(6, 3, "red");
console.log("rect1", rect1);
console.log("Area rect 1: ", rect1.getArea());
//console.log("Setter Area rect 1: ", rect1.getArea(40));

let rect2 = new Reactangle(8, 3, "green");
console.log("rect2", rect2);
console.log("Area rect 2: ", rect2.getArea());
console.log("Getter Circumfrence rect 2: ", rect2.circumfrence);

///////////////****************Inheritance*****************////////////
//parent class
class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  print() {
    console.log(`Hi my name is ${this.name}. I am ${this.age} years old.`);
  }
}
//child class
class Programmer extends Person {
  constructor(_name, _age, _experience) {
    super(_name, _age);
    this.experience = _experience;
  }
  describe() {
    console.log(`Hi my name is ${this.name}. I am ${this.age} years old.
    I have ${this._experience} years of experience.`);
  }
}

// let person = new Person("Taha", 28);
// let programmer = new Programmer("Toto", 29, 4);

//array of objects
const prog = [new Programmer("Taha", 28, 4), new Programmer("Toto", 29, 6)];

// person.print();
// //person.describe(); //error as parent can't call child methods.
// programmer.print();
// programmer.describe();

function developeSoftware(prog) {
  for (let item of prog) {
    item.describe();
  }
}
developeSoftware(prog);

//**********Polymorphism*************** */////////
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.radius = r;
  }
  //same function with different forms
  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.width = w;
    this.height = h;
  }

  area() {
    return this.width * this.height;
  }
}

function calculateArea(shapes) {
  console.log("shapes", shapes);
  for (let area of shapes) {
    console.log(area.area());
  }
  //   return shapes.reduce((sum, shape) => {
  //     if (shape instanceof Shape) {
  //       console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
  //       console.log(
  //         `Shape: ${shape.toString()} - perimeter: ${shape.perimeter()}`
  //       );
  //       return sum + shape.area();
  //     }
  //     throw Error("Bad argument shape.");
  //   }, 0);
}

const shapes = [new Circle(3), new Rectangle(2, 3)];

calculateArea(shapes);
