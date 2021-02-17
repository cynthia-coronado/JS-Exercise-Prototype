/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function (someFood) {
  if (this.stomach.length < 10) {
    this.stomach.push(someFood);
  }
};
Person.prototype.poop = function () {
  this.stomach = [];
};
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};
// const personOne = new Person('Cynthia', 29);
// console.log(personOne.toString());
// personOne.eat('Tacos');
// console.log(personOne.stomach);
// personOne.poop();
// console.log(personOne.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.

    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
// Not part of assignment 
Car.prototype.carInfoString = function () {
  return `${this.model}, ${this.milesPerGallon}`;
}
Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};
Car.prototype.drive = function (distance) {
  const gasoline = this.tank - distance / this.milesPerGallon;
  if (gasoline > 0) {
    this.odometer += distance;
    this.tank = gasoline;
  } else {
    this.odometer += this.milesPerGallon * this.tank;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
};
// const Mercedes = new Car('AMG GT', 8);
// Mercedes.fill(3);
// console.log(Mercedes.tank);
// console.log(Mercedes.carInfoString());
// console.log(Mercedes.drive(30));
// console.log(Mercedes.odometer);
// console.log(Mercedes.tank);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
  this.stomach = [];
}
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};
Baby.prototype.eat = function (babyFood) {
  if (this.stomach.length < 4) {
    this.stomach.push(babyFood);
  }
};
Baby.prototype.poop = function () {
  this.stomach = [];
};
// const babyBoy = new Baby('Donovan', 5, 'Grave Digger');
// babyBoy.eat('Chicken Nuggets');
// console.log(babyBoy.stomach);
// babyBoy.poop();
// console.log(babyBoy.stomach);

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding - This means a global scope and no declared onject. 'This' refers to the window object in the browser.
  2. Implicit Binding - This means when an object method is called 'this refers to what is left of the '.' Most common principle.
  3. New Binding - 'New' keyword creates a new object from a constructor function and 'This' points to it. 
  4. Explicit Binding - Uses the keywords 'Call' and 'Apply'. All refer to a specific object that is chosen. 
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  return 'bar';
}

export default {
  foo,
  Person,
  Car,
  Baby
}