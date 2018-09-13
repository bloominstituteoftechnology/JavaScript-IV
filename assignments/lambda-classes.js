// CODE here for your Lambda Classes

class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  // Methods go here:
  speak() {
    console.log(`Hello my name is ${this.name} I am from ${this.location}`);
  }
};

class Instructor extends Person {
  constructor(instAttr) {
    super(instAttributes)
    this.specialty = instAttr.specialty
    this.favLanguage = instAttr.favLanguage;
    this.catchPhrase = instAttr.catchPhrase;
  }
  // Methods go here:
  demo() {
    console.log(`Today we are learning about ${subject}.`);
  } // end of demo
  grade() {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  } // end of grade
}

class Student extends Person {
  constructor(studAttr) {
    this.previousBackground = studAttr.previousBackground;
  }
}



































