// CODE here for your Lambda Classes

// base class
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.age = attributes.age;
    this.gender = attributes.gender;

  }
  speak() {
    console.log(`Hello my name is ${this.name} I am from ${this.location}`);
  }
}

// child classes of Person
class Instuctor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.favLanguage = instructorAttrs.favLanguage;
    this.specialty = instructorAttrs.specialty;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}!`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}!`);
  }
}

class Student extends Person {
  constructor(studentAttrs) {
    super(studentAttrs);
  }

}

class ProjectManager extends Person {
  constructor(projectManagerAttrs) {
    super(projectManagerAttrs);
  }
}



const fred = new Instuctor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
})

const tom = new Student({
  name: 'Tom',
  location: 'Seattle',
  age: 28,
  gender: 'male'
})


fred.grade(tom, "Java");

console.log(fred);