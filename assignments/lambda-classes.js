// CODE here for your Lambda Classes

class Person {
  constructor(traits) {
    this.name = traits.name;
    this.age = traits.age;
    this.location = traits.location;
    this.gender = traits.gender;    
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor() {
    
  }   
}