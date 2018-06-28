class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name
     this.age= personAttributes.age
     this.location =  personAttributes.location
     this.gender = personAttributes.gender
  }
  speak()= {
console.console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}
