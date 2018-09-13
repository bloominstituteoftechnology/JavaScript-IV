// CODE here for your Lambda Classes
//base-class declaration
class Person {
  constructor(personInfo) {
    this.name = personInfo.name;
    this.age = personInfo.age;
    this.location = personInfo.location;
    this.gender = personInfo.gender;
  }
  //methods
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

//extended class from Person
class Instructor extends Person {
  constructor(insInfo) {
    super(insInfo);
    this.speciality = insInfo.speciality;
    this.favLanguage = insInfo.favLanguage;
    this.catchPhrase = insInfo.catchPhrase;
  }
  //methods
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}
