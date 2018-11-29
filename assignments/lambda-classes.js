// CODE here for your Lambda Classes

class Person {
  constructor(personAtr) {
    this.name = personAtr.name;
    this.age = personAtr.age;
    this.location = personAtr.location;
    this.gender = personAtr.gender;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends Person {
  constructor(instructAtr){
    super(instructAtr);
    this.specialty = instructAtr.specialty;
    this.favLanguage = instructAtr.favLanguage;
    this.catchPhrase = instructAtr.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`)
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
}

