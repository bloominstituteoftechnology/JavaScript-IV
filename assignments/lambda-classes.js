// CODE here for your Lambda Classes

// base class
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.age = attributes.age;
    this.gender = attributes.gender;
    this.favLanguage = attributes.favLanguage;
    this.specialty = attributes.specialty;
    this.catchPhrase = attributes.catchPhrase;
  }
  speak() {
    console.log(`Hello my name is ${this.name} I am from ${this.location}`);
  }
}

// child classes of Person
class Instuctors extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
  }
}

class Students extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
  }
}

class ProjectManagers extends Person {
  constructor(projectManagerAttrs) {
    super(projectManagerAttrs);
  }
}