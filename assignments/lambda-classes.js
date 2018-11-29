// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, and I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(instructAttrbs) {
    super(instructAttrbs);
    this.speciality = instructAttrbs.speciality;
    this.favLanguage = instructAttrbs.favLanguage;
    this.catchPhrase = instructAttrbs.catchPhrase;
  }

  demo(string) {
    return `Today we are learning about ${string}.`;
  }

  grade(subject) {
    return `${this.name} receives a perfect score on ${subject}.`;
  }
}
