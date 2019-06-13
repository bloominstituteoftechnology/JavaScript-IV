// CODE here for your Lambda Classes

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//
//   speak() {
//     console.log(this.name + ' makes a noise.');
//   }
// }


class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instAttrs) {
    this.specialty = instAttrs.specialty;
    this.favLanguage = instAttrs.favLanguage;
    this.catchPhrase = instAttrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${this.subject}`);
  }
}


// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }
//
//   speak() {
//     console.log(this.name + ' barks.');
//   }
// }


class Student extends Person {
  constructor(attrs) {
    super(attrs) {
      this.previousBackground = previousBackground;
      this.className = className;
      this.favSubject = favSubjects;
      this.listsSujects = listsSubjects;
      this.PRAssignment = PRAssignment;
    }
  }
}
