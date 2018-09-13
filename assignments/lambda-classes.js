// CODE here for your Lambda Classes
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
} //end Person class

class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps);
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}
