/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:

class Airplane {
    constructor(name, isFlying) {
        this.name = name;
        this.isFlying = isFlying;
    }

    takeOff(isFlying) {
        this.isFlying = true;
        console.log('We are flying!');
    }

    land(isFlying) {
        this.isFlying = false;
        console.log('We are not flying..');
    }
}



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

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this. stomach = [];
    }
    
    eat () {
        if(this.stomach.length < 10) {
            this.stomach.push(someFood);
        } else {
            return 'Stop eating!';
        }
    }

    poop () {
        return this.stomach = [];
    }

    toString (){
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
    constructor(model, milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.gallonsInTank = 0;
        this.odometer = 0;
    }

    fill () {
        let gallons; //Should gallons be declared here?
        this.gallonsInTank += gallons;
        console.log(this.gallonsInTank);
    }

    drive () {
        let maxDistancePossible = this.gallonsInTank / this.milesPerGallon;
        if(this.distance > maxDistancePossible) {
            // Should I make distance a let variable?
            distance += this.odometer;
            let gallonsUsed = distance / this.milesPerGallon;
            this.gallonsInTank -= gallonsUsed;
        }
    }
}

const audi = new Car('RS6', 20);

audi.fill(30);
console.log(audi.drive(40));
console.log(audi.tank);
console.log(audi.odometer);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name`, Baby takes a second argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/


class Baby  extends Person{
    constructor(name, age){
        super(name, age);
        this.age = age;
        this.name = name;

        this.favoriteToy = favoriteToy;
    }

    play (){
        console.log(`Playing with ${this.favoriteToy}`);
    }
}

const charlie = new Baby('Hello, I am Charlie!', 2);

console.log(charlie, 2);
charlie.play();

    // Inherit age from Person. 

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
    module.exports = module.exports || {}
    if (Airplane) { module.exports.Airplane = Airplane }
    if (Person) { module.exports.Person = Person }
    if (Car) { module.exports.Car = Car }
    if (Baby) { module.exports.Baby = Baby }
}

