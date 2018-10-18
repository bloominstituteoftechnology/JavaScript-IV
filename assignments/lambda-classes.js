/*
  === Person ===
  * name
  * age
  * location
  * gender
  * speak() // returns the string: 'Hello my name is <name>, I am from <location>.'
*/
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}