// CODE here for your Lambda Classes
class Person {
  constructor(personAttr){
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location = personAttr.locaiton;
    this.gender = personAttr.name;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}