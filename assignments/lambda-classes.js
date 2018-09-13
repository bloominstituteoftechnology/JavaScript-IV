//base class
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps);
    this.speciality = instructorProps.speciality;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade({student}, subject){
    console.log(`${student.name} receives a perfect score on ${subject}!`);
  }
}