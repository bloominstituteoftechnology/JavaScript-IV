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

/*
  === Instructor ===
  Inherit from Person
  * specialty
  * favLanguage
  * catchPhrase
  * demo(subject) // returns the phrase: 'Today we are learning about <subject>'
  * grade(student, subject) // returns the phrase: '<student.name> receives a perfect score on <subject>'
*/
class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}
