// CODE here for your Lambda Classes
class Person {
    constructor(name) {
      this.name = name;
      this.age = age;
      this.location = location;
    }
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
  }

  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(`${this.name} barks!`);
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(`${this.name} Meows!`);
    }
  }