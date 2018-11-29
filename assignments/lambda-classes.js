// CODE here for your Lambda Classes
class Person {
    constructor(att){
    this.name = att.name;
    this.age = att.age;
    this.location = att.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from {this.location}`);
    }
}

class Instructor extends Person {
    constructor(InstrAtt) {
        super(InstrAtt);
        this.specialty = InstrAtt.specialty;
        this.favLanguage = InstrAtt.favLanguage;
        this.catchPhrase = InstrAtt.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about {subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(att) {
        this.previousBackground = att.previousBackground;
        this.className = att.className;
        this.favSubjects = att.favSubjects;
    }
    listSubjects() {
        this.favSubjects.map(favSu => {
            console.log(favSu);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
      }

      sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
      }
}

class ProjectManager extends Instructor {
    constructor(att) {
      super(att);
      this.gradClassName = att.gradClassName;
      this.faveInstructor = att.faveInstructor;
    }
     standUp(channel) {
      console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
     debugsCode(student, subject) {
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
  }